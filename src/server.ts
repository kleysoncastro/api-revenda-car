import express from 'express';
// eslint-disable-next-line import/no-unresolved
import { categoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log('running server'));
