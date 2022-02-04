import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class LinstCategoriesController {
    constructor(private listCategoiesUseCase: ListCategoriesUseCase) {}
    handle(request: Request, response: Response): Response {
        const categories = this.listCategoiesUseCase.execute();
        return response.json(categories);
    }
}

export { LinstCategoriesController };
