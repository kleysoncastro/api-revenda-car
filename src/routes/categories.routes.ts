import { Router } from "express";

import { createContegoryController } from "../modules/cars/useCases/createCategory";
import { linstCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createContegoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    const allCateroris = linstCategoriesController.handle(request, response);
    return response.json(allCateroris);
});

export { categoriesRoutes };
