import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

export interface Product {
  id?: number,
  name: string,
  amount: number,
  orderId: number,
}

export default class ProductModel {
  connection: Pool; 

  constructor() {
    this.connection = connection;
  }

  async getAll(): Promise<Product[]> {
    const QUERY = 'SELECT * FROM Trybesmith.products';
    const [response] = await this.connection.execute<(Product & RowDataPacket)[]>(QUERY); 
    console.log(response);
    return response;
  }

  async insert(name: string, amount:string) {
    const QUERY = 'INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)';
    const [response] = await this.connection.execute<ResultSetHeader>(QUERY, [name, amount]);
    return response;
  }
}
