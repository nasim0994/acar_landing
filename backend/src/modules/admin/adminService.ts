import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { User } from '../user/userModel';

export const deleteAdminService = async (userId: string) => {
  const isExist = await User.findById(userId);
  if (!isExist) throw new AppError(httpStatus.NOT_FOUND, 'User not found');

  const result = await User.findByIdAndUpdate(userId);
  return result;
};

export const getAllAdminService = async () => {
  const result = await User.find();
  return result;
};
