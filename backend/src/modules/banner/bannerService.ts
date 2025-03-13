import AppError from '../../errors/AppError';
import { IBanner } from './bannerInterface';
import { Banner } from './bannerModel';
import httpStatus from 'http-status';

export const addBannerService = async (data: IBanner) => {
  const isExist = await Banner.findOne();
  if (isExist) throw new AppError(httpStatus.CONFLICT, 'Banner already exist');

  const result = await Banner.create(data);
  return result;
};

export const getBannerService = async () => {
  const result = await Banner.findOne();
  return result;
};

export const updateBannerService = async (data: IBanner, id: string) => {
  const result = await Banner.findByIdAndUpdate(id, data, { new: true });
  return result;
};
