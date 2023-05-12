import { type Request, type Response } from "express";
import things from "../../data/things.js";

export const getThings = (reg: Request, res: Response) => {
  res.status(200).json({ things });
};

export const getThing = (req: Request, res: Response) => {
  const { id } = req.params;

  const filterThings = things.filter((thing) => thing.id === id);

  if (filterThings.length === 0) {
    res.status(404).json({ message: "" });
    return;
  }

  res.status(200).json({ filterThings });
};
