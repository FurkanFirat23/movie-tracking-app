import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicture: { type: String, default: "" },
  lists: {
    watched: [{ type: Object }],
    toWatch: [{ type: Object }],
    favorites: [{ type: Object }],
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
