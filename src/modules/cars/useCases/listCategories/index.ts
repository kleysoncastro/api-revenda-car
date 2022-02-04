import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { LinstCategoriesController } from "./LinstCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRespository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRespository);
const linstCategoriesController = new LinstCategoriesController(
    listCategoriesUseCase
);

export { linstCategoriesController };
