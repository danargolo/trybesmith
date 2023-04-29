import Router from 'express';
import ProductController from '../controllers/product.controller';

const producRouter = Router();
const productController = new ProductController();

producRouter.get('/', productController.getAll);
producRouter.post('/', productController.insert);

export default producRouter;