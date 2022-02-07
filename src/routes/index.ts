import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { importCategoryFromFile } from "./importCategoryFromFile.routes";
import { specificationRouter } from "./specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/import", importCategoryFromFile);
router.use("/especification", specificationRouter);

export { router };
