import express from "express";
import { tourRouter } from "./routes/tours";
import { jsonParser, urlEncodedParser } from "./middleware/bodyParser";
import { logger } from "./middleware/logging";

const app = express();
app.use(jsonParser);
app.use(urlEncodedParser);
app.use(logger);

app.use("/tours", tourRouter);

app.listen(process.env.PORT || 8091, () => {
  console.log("Server started...");
});
