import mongoose from "mongoose";

interface Exercise {
  userName: string;
  description: string;
  duration: number;
  date: Date;
}

const exerciseSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const exerciseModel = mongoose.model<Exercise>("Exercise", exerciseSchema);

export default exerciseModel;
