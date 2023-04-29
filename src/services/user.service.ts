import UserModel from '../models/user.model';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  insert = async (
    username: string, 
    vocation: string,
    level: number, 
    password: string,
  ) => {
    const result = await this.model.insert(username, vocation, level, password);
    return result;
  };
}