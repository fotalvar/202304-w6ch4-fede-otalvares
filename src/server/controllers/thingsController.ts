import { type Request, type Response } from "express";
import things from "../../data/things.js";
import { type ThingStructure } from "../../data/types.js";

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

export const deleteThing = (req: Request, res: Response) => {
  const { id } = req.params;

  const thingPosition = things.findIndex((thing) => thing.id === id);

  if (thingPosition === -1) {
    res.status(404).json({ message: "Thing not found" });
    return;
  }

  things.splice(thingPosition, 1);

  res.status(200).json("Thing deleted!");
};

export const addThings = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingStructure
  >,
  res: Response
) => {
  const newThing = {
    id: crypto.randomUUID(),
    ...req.body,
  };

  things.push(newThing);

  res.status(201).json({ newThing });
};
