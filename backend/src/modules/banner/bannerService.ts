import AppError from '../../errors/AppError';
import { deleteFile } from '../../utils/deleteFile';
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
  const isExist = await Banner.findById(id);
  if (!isExist) {
    deleteFile(data?.image as string);
    throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
  }

  const result = await Banner.findByIdAndUpdate(id, data, { new: true });

  if (result && data?.image && isExist?.image) {
    deleteFile(isExist?.image);
  }

  return result;
};
