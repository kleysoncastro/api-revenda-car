import { Router } from "express";

import { createContegoryController } from "../modules/cars/useCases/createCategory";
import { linstCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    return createContegoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    const allCateroris = linstCategoriesController.handle(req, res);
    return res.json(allCateroris);
});

export { categoriesRoutes };
