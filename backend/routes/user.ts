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
    const { userName, userEmail } = req.body;
    const newuser = await new userModel({ userName, userEmail });
    newuser.save().then(() => res.status(200).json("user added successfully"));
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.get("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    await userModel.findById(id).then((user) => res.json(user));
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.post(
  "/update/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const id = req.params.id;
      const { userName, userEmail } = req.body;
      const user = await userModel.findById(id, {
        userName: userName,
        userEmail: userEmail,
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

userRouter.delete(
  "/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const id = req.params.id;
      await userModel.findByIdAndRemove(id).then((user) => {
        res.json({ message: "User deleted", user: user });
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default userRouter;
