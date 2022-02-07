import { Router } from "express";
import multer from "multer";

import { importCategoryController } from "../modules/cars/useCases/ImportCategory";

const importCategoryFromFile = Router();

const upload = multer({
    dest: "./tmp",
});

importCategoryFromFile.post("/", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export { importCategoryFromFile };
