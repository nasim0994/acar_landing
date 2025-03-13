import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import fs from 'fs';
import { IFavicon } from './faviconInterface';
import { Favicon } from './faviconModel';

export const addFaviconService = async (data: IFavicon) => {
  const isExist = await Favicon.findOne();
  if (isExist) {
    fs.unlink(`./uploads/${data?.favicon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    throw new AppError(httpStatus.CONFLICT, 'Favicon already exist !');
  }

  const result = await Favicon.create(data);
  return result;
};

export const getFaviconService = async () => {
  const result = await Favicon.findOne();
  return result;
};

export const updateFaviconService = async (data: IFavicon, id: string) => {
  const isExist = await Favicon.findById(id);
  if (!isExist) {
    fs.unlink(`./uploads/${data?.favicon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    throw new AppError(httpStatus.NOT_FOUND, 'Favicon not found !');
  }

  const result = await Favicon.findByIdAndUpdate(id, data, { new: true });

  if (result?.favicon && data?.favicon && isExist?.favicon) {
    fs.unlink(`./uploads/${isExist?.favicon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }

  return result;
};
