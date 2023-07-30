import mongoose from "mongoose";

let isConnected = false; // Singleton connection
export const connectToDB = async () => { 
    mongoose.set('strictQuery', true);  // This is to prevent mongoose from using deprecated functions
    if (isConnected) {
        console.log('=> mongoose is already connected');
        return ;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt"  ,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log('=> mongoose is connected');
    } catch (error) {
        console.log('=> mongoose connection failed');
        console.log(error);
    }
}