import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/service/CreateSpecificationService";

const specificationRouter = Router();
const specificationRepository = new SpecificationRepository();

specificationRouter.post("/", (req, res) => {
    const createCategoryService = new CreateSpecificationService(
        specificationRepository
    );

    const { name, description } = req.body;

    createCategoryService.execute({ name, description });
    return res.send();
});

export { specificationRouter };
