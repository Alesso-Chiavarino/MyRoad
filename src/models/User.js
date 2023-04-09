import { model, Schema, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    avatar_url: {
        url: {
            type: String
        },
        public_id: {
            type: String
        }
    },
    bio: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    careers: [
        {
            type: String,
            trim: true
        },
    ],
}, { timestamps: true });

export default models.User || model('User', userSchema);
