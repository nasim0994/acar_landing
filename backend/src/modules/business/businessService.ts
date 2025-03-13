import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { IBusiness } from './businessInterface';
import { Business } from './businessModel';

export const addBusinessService = async (data: IBusiness) => {
  const isExist = await Business.findOne();
  if (isExist)
    throw new AppError(httpStatus.CONFLICT, 'Business already exist');

  const result = await Business.create(data);
  return result;
};

export const getBusinessService = async () => {
  const result = await Business.findOne();
  return result;
};

export const updateBusinessService = async (data: IBusiness, id: string) => {
  const result = await Business.findByIdAndUpdate(id, data, { new: true });
  return result;
};
