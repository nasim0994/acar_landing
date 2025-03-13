import AppError from '../../errors/AppError';
import { ILogo } from './logoInterface';
import { Logo } from './logoModel';
import httpStatus from 'http-status';
import fs from 'fs';

export const addLogoService = async (data: ILogo) => {
  const isExist = await Logo.findOne();
  if (isExist) {
    fs.unlink(`./uploads/${data.logo}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    throw new AppError(httpStatus.CONFLICT, 'Logo already exist !');
  }

  const result = await Logo.create(data);
  return result;
};

export const getLogoService = async () => {
  const result = await Logo.findOne();
  return result;
};

export const updateLogoService = async (data: ILogo, id: string) => {
  const isExist = await Logo.findById(id);
  if (!isExist) {
    fs.unlink(`./uploads/${data.logo}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    throw new AppError(httpStatus.NOT_FOUND, 'Logo not found !');
  }

  const result = await Logo.findByIdAndUpdate(id, data, { new: true });

  if (result?.logo && data?.logo && isExist?.logo) {
    fs.unlink(`./uploads/${isExist?.logo}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }

  return result;
};
