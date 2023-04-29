import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  getAll = async (_req: Request, res: Response) => {
    const result = await this.service.getAll();
    res.status(200).json(result);
  };
  
  insert = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const result = await this.service.insert(name, amount);
    res.status(201).json(result);
  };
}