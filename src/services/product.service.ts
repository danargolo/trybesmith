import ProductModel from '../models/product.model';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  getAll = async () => {
    const result = await this.model.getAll();
    return result;
  };

  insert = async (name: string, amount:string) => {
    const { insertId } = await this.model.insert(name, amount);

    const response = {
      id: insertId,
      name,
      amount,
    };
    
    return response;
  };
}