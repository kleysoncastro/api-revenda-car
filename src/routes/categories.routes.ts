import { Router } from "express";

import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const categoryAlreadyExist = categoriesRepository.findByName(name);

    if (categoryAlreadyExist) {
        return res.status(400).json({ error: "Category already axists" });
    }

    categoriesRepository.create({ name, description });
    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();
    return res.json({ all });
});

export { categoriesRoutes };
