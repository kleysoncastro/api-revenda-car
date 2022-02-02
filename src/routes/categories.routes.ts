import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

import { Category } from "../model/Category";

const categoriesRoutes = Router();
const categories: Category[] = [];
categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    categories.push({
        name,
        description,
        id: uuidv4(),
        created_at: new Date(),
    });
    return res.status(201).send(categories);
});

export { categoriesRoutes };
