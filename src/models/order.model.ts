import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';

export interface Order {
  id?: number,
  userId: number,
  productsIds: number[],
}

export default class OrderModel {
  connection: Pool; 

  constructor() {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const QUERY = `SELECT o.id, o.user_id userId, JSON_ARRAYAGG(p.id) as productsIds 
      FROM Trybesmith.orders o 
      INNER JOIN Trybesmith.products p 
      ON o.id = p.order_id 
      GROUP BY p.order_id`;
    const [response] = await this.connection.execute<(Order & RowDataPacket)[]>(QUERY); 
    
    return response;
  }
}
