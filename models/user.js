import { Schema,model,models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
    },
    username    : { 
        type: String,
        unique: [true, "Username already exists"],
        match : [/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"],
        required: [true, "Username is required"],
    },
    image : {
        type: String,
        required: [true, "Image is required"],
    },
});

const User = models.User || model("User", userSchema); // If model exists use it else create new model
export default User;