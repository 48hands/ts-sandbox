import { Router } from "express";
import { apiGetTours, apiCreateTour, apiDeleteTour } from "./api/tours";

export const tourRouter = Router();
tourRouter.get("/", apiGetTours);
tourRouter.post("/", apiCreateTour);
tourRouter.delete("/:id", apiDeleteTour);
