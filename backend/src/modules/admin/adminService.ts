import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { User } from '../user/userModel';

export const deleteAdminService = async (userId: string) => {
  const isExist = await User.findById(userId);
  if (!isExist) throw new AppError(httpStatus.NOT_FOUND, 'User not found');

  // check last admin
  const admins = await User.find();
  if (admins.length === 1) {
    throw new AppError(httpStatus.BAD_REQUEST, 'You can not delete last admin');
  }

  const result = await User.findByIdAndDelete(userId);
  return result;
};

export const getAllAdminService = async () => {
  const result = await User.find();
  return result;
};
