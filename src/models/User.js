import { model, Schema, models } from "mongoose";

//create user model
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    careers: [
        {
            type: String,
            trim: true
        },
    ],
}, { timestamps: true });

export default models.User || model('User', userSchema);
