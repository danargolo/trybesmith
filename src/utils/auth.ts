import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const configJWT:object = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const generateToken = (data: string) => {
  const token = jwt.sign({ name: data }, secret, configJWT);

  return token;
};

export default generateToken;
