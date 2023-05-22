import express from "express";
import exerciseModel from "../models/exercise";

const exerciseRouter = express.Router();

exerciseRouter.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const exercises = await exerciseModel.find();
    res.status(200).json(exercises);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

exerciseRouter.post(
  "/add",
  async (req: express.Request, res: express.Response) => {
    const { userName, description, duration, date } = req.body;

    try {
      const exercise = await exerciseModel.create({
        userName,
        description,
        duration,
        date,
      });
      res.status(200).json({ message: "Exercise created", exercise });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

exerciseRouter.post(
  "/update/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      exerciseModel.findById(req.params.id).then((exercise) => {
        if (!exercise) {
          return res.status(404).json({ error: "Exercise not found" });
        }

        exercise.userName = req.body.userName;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = req.body.date;

        exercise
          .save()
          .then(() => {
            res.status(200).json("Exercise updated");
          })
          .catch((err: any) => {
            res.status(400).json({ error: err.message });
          });
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

exerciseRouter.get(
  "/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const exercise = await exerciseModel
        .findById(req.params.id)
        .then((exercise) => {
          if (!exercise) {
            return res.status(404).json({ error: "Exercise not found" });
          }
          res.status(200).json({ exercise });
        })
        .catch((err) => {
          res.status(500).json({ error: "Something went wrong" });
        });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

exerciseRouter.delete(
  "/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const exercise = await exerciseModel.findById(req.params.id);
      if (!exercise) {
        return res.status(404).json({ error: "Exercise not found" });
      }
      await exerciseModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Exercise deleted" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default exerciseRouter;
