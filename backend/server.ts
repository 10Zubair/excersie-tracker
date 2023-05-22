import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRouter from "./routes/user";
import exerciseRouter from "./routes/exercise";

const dbURI = "mongodb://localhost:27017/exercise-tracker";
const app = express();
const port = 3000;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  })
  .catch((error: any) => {
    console.error("Error connecting to the database:", error);
  });

app.use(bodyParser.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/exercise", exerciseRouter);
