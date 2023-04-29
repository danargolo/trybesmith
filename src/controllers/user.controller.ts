import { Request, Response } from 'express';
import UserService from '../services/user.service';
import generateToken from '../utils/auth';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  insert = async (req: Request, res: Response) => {
    const { username, vocation, level, password } = req.body;

    await this.service.insert(username, vocation, level, password);

    const token = generateToken(username);
    return res.status(201).json({ token });
  };
}