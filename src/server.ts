import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRouter } from "./routes/specification.routes";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/especification", specificationRouter);

app.listen(3333, () => console.log("running server"));
