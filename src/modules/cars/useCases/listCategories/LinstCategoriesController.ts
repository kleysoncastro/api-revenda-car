import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class LinstCategoriesController {
    constructor(private listCategoiesUseCase: ListCategoriesUseCase) {}
    handle(req: Request, res: Response): Response {
        const categories = this.listCategoiesUseCase.execute();
        return res.json(categories);
    }
}

export { LinstCategoriesController };
