import { Router } from 'express';

const categoriesRoutes = Router();
const categories = [];
categoriesRoutes.post('/categories', (req, res) => {
  const { name, description } = req.body;

  categories.push({
    name,
    description,
  });
  return res.status(201).send(categories);
});

// eslint-disable-next-line import/prefer-default-export
export { categoriesRoutes };
