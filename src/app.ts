import express from 'express';
import producRouter from './routes/product.router';
import userRouter from './routes/user.router';
import orderRouter from './routes/order.router';

const app = express();

app.use(express.json());

app.use('/products', producRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
