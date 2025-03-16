import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import fs from 'fs';
import { IWhyChoose } from './whyChooseInterface';
import { WhyChoose } from './whyChooseModel';

export const addWhyChooseService = async (data: IWhyChoose) => {
  const result = await WhyChoose.create(data);
  return result;
};

export const getAllWhyChooseService = async () => {
  const result = await WhyChoose.find();
  return result;
};

export const getWhyChooseByIdService = async (id: string) => {
  const result = await WhyChoose.findById(id);
  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'WhyChoose not found');
  return result;
};

export const updateWhyChooseService = async (id: string, data: IWhyChoose) => {
  const isExist = await WhyChoose.findById(id);
  if (!isExist) {
    fs.unlink(`./uploads/${data?.icon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    throw new AppError(httpStatus.NOT_FOUND, 'WhyChoose not found');
  }

  const result = await WhyChoose.findByIdAndUpdate(id, data, { new: true });

  if (result?.icon && data?.icon && isExist?.icon) {
    fs.unlink(`./uploads/${isExist?.icon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }

  return result;
};

export const deleteWhyChooseService = async (id: string) => {
  const isExist = await WhyChoose.findById(id);
  if (!isExist) throw new AppError(httpStatus.NOT_FOUND, 'WhyChoose not found');

  const result = await WhyChoose.findByIdAndDelete(id);

  if (result?.icon) {
    fs.unlink(`./uploads/${result?.icon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }

  return result;
};
