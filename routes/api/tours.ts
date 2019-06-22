import { RequestHandler } from "express";
import uuid from "uuid/v4";
import { DataStore } from "../../data/data";

export const apiGetTours: RequestHandler = (req, res, next) => {
  res.json(DataStore.tours);
};

export const apiCreateTour: RequestHandler = (req, res, next) => {
  const newTour = {
    tourID: uuid(),
    location: req.body.location || "",
    tourTitle: req.body.toursitle || "",
    tourCategory: req.body.tourCategory || "",
    tourDescription: req.body.tourDescription || "",
    price: req.body.price || 0,
    currency: req.body.currency || ""
  };

  DataStore.tours.push(newTour);
  res.send('tour added');
}

export const apiDeleteTour: RequestHandler = (req, res, next) => {
  const tourID = req.params.id;
  const tourIndex = DataStore.tours.findIndex((item: any) => {
    return item.tourID == tourID
  });
  console.log(tourIndex);
  if (tourIndex > -1) {
    DataStore.tours.splice(tourIndex, 1);
    res.json({ status: "success", message: "Element removed" });
  } else {
    res.json({ status: "error", message: "Element not found" });
  }
}
