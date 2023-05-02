import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class ProductController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  getAll = async (_req: Request, res: Response) => {
    const result = await this.service.getAll();
    res.status(200).json(result);
  };  
}