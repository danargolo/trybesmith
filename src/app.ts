import express from 'express';
import producRouter from './routes/product.router';
import userRouter from './routes/user.router';

const app = express();

app.use(express.json());

app.use('/products', producRouter);
app.use('/users', userRouter);

export default app;
