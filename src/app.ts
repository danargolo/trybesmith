import express from 'express';
import producRouter from './routes/product.router';

const app = express();

app.use(express.json());

app.use('/products', producRouter);

export default app;
