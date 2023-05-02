import Router from 'express';
import OrderController from '../controllers/order.controller';

const orderRouter = Router();
const productController = new OrderController();

orderRouter.get('/', productController.getAll);

export default orderRouter;