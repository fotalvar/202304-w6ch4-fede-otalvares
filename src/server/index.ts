import express from "express";
import morgan from "morgan";
import {
  addThings,
  deleteThing,
  getThing,
  getThings,
} from "./controllers/thingsController.js";

export const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/things", getThings);

app.get("/things/:idThings", getThing);

app.delete("/things/:idThings", deleteThing);

app.post("/things", addThings);
