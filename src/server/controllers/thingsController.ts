import { type Request, type Response } from "express";
import things from "../../data/things.js";

export const getThings = (reg: Request, res: Response) => {
  res.status(200).json({ things });
};
