import mongoose from "mongoose";

interface User {
  userName: string;
}

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLengthen: 3,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLengthen: 3,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model<User>("User", userSchema);

export default userModel;
