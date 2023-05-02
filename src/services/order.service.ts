import OrderModel from '../models/order.model';

export default class ProductService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  getAll = async () => {
    const result = await this.model.getAll();
    return result;
  };
}