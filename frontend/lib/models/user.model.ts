import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
    {
        clerkId: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        username: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        photo: { type: String },
        role: { type: String, default: "user" },
    },

    {
        timestamps: true
    }
)

const User = models.User || model("User", UserSchema);

export default User;