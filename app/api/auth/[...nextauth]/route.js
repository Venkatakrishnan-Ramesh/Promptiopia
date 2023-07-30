import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";

// console.log(process.env.GOOGLE_ID);
// console.log(process.env.GOOGLE_CLIENT_SECRET);
connectToDB();

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId : process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    
    async session(session)
        { const sessionUser = await User.findOne({email: session.user.email});
        // console.log(sessionUser);
        session.user.id = sessionUser._id.toString();

        return session;
        }
    ,
    async signIn ({profile}){
        try{
            await connectToDB();
            // CHECK IF USER EXISTS IN DB
            const userExists = await User.findOne({email: profile.email});
            // if not create user
            if (!userExists){
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(/\s/g, "") ,
                    image: profile.picture,
                });
            }
            return true;
        } catch (error){
            console.log(error);
            return false;

        }
    }
});

export { handler as GET , handler as POST}
