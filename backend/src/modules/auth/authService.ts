import config from '../../config';
import AppError from '../../errors/AppError';
import { createToken } from '../../utils/createToken';
import { User } from '../user/userModel';
import { ILoginUser } from './authInterface';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import { IUser } from '../user/userInterface';

//---------------Admin
export const createUserService = async (userData: IUser) => {
  const data = userData;
  const result = await User.create(data);
  return result;
};

// --------------Login
export const loginUserService = async (payload: ILoginUser) => {
  const user = await User.findOne({ username: payload?.username });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  // checking if the user is blocked
  const isBlocked = user?.isBlocked;

  if (isBlocked) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked !');
  }

  //checking if the password is correct

  const isMatch = await bcrypt.compare(payload?.password, user?.password);
  if (!isMatch)
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //create token and sent to the  client

  const jwtPayload = {
    username: user.username,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.JWT_ACCESS_SECRET as string,
    config.JWT_ACCESS_EXPIRES_IN as string,
  );

  return {
    accessToken,
    user: {
      name: user.name,
      username: user.username,
      role: user.role,
      isBlocked: user.isBlocked,
    },
  };
};

//---------------Logged User
export const loggedUserService = async (username: string) => {
  const user = await User.findOne({ username }).select('-password');

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  return user;
};
