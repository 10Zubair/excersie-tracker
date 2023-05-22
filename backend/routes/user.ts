import express from "express";
import userModel from "../models/user";

const userRouter = express.Router();

userRouter.get("/", async (req: express.Request, res: express.Response) => {
  try {
    await userModel.find().then((users) => res.json(users));
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.post("/add", async (req: express.Request, res: express.Response) => {
  try {
    const userName = req.body.userName;
    const newuser = await new userModel({ userName });

    newuser.save().then(() => res.status(200).json("user added successfully"));
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default userRouter;
