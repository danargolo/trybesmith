import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

export default class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async insert(
    username: string, 
    vocation: string, 
    level: number, 
    password: string,
  ) {
    const QUERY = 'INSERT INTO Trybesmith.users(username,vocation,level,password) VALUES(?,?,?,?)';
    const [response] = await this.connection.execute<ResultSetHeader>(QUERY, [
      username, 
      vocation, 
      level, 
      password]);
      
    return response;
  }
}
