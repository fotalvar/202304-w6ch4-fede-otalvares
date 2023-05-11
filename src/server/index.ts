import express from "express";
import morgan from "morgan";
import { getThings } from "./controllers/thingsController.js";

export const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/things", getThings);
