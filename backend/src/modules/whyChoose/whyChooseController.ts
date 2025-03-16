import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import {
  addWhyChooseService,
  deleteWhyChooseService,
  getAllWhyChooseService,
  getWhyChooseByIdService,
  updateWhyChooseService,
} from './whyChooseService';
import fs from 'fs';
import { IWhyChoose } from './whyChooseInterface';

export const addWhyChoose: RequestHandler = catchAsync(
  async (req, res, next) => {
    const icon: string | undefined = req?.file?.filename;

    if (!icon) throw new AppError(httpStatus.NOT_FOUND, 'Icon is required !');

    const data: IWhyChoose = {
      ...req.body,
      icon: `/whyChoose/${icon}`,
    };

    try {
      const result = await addWhyChooseService(data);

      res.status(200).json({
        success: true,
        message: 'WhyChoose add successfully',
        data: result,
      });
    } catch (error) {
      fs.unlink(`./uploads/whyChoose/${icon}`, (err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      });
      next(error);
    }
  },
);

export const getAllWhyChoose: RequestHandler = catchAsync(async (req, res) => {
  const result = await getAllWhyChooseService();

  res.status(200).json({
    success: true,
    message: 'All WhyChoose get successfully',
    data: result,
  });
});

export const getWhyChooseById: RequestHandler = catchAsync(async (req, res) => {
  const result = await getWhyChooseByIdService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'WhyChoose get successfully',
    data: result,
  });
});

export const updateWhyChoose: RequestHandler = catchAsync(
  async (req, res, next) => {
    const icon: string | undefined = req?.file?.filename;

    const data: IWhyChoose = {
      ...req.body,
      icon: icon ? `/whyChoose/${icon}` : undefined,
    };

    try {
      const result = await updateWhyChooseService(req.params.id, data);

      res.status(200).json({
        success: true,
        message: 'WhyChoose updated successfully',
        data: result,
      });
    } catch (error) {
      if (icon) {
        fs.unlink(`./uploads/whyChoose/${icon}`, (err) => {
          if (err) {
            // eslint-disable-next-line no-console
            console.error(err);
          }
        });
      }
      next(error);
    }
  },
);

export const deleteWhyChoose: RequestHandler = catchAsync(async (req, res) => {
  await deleteWhyChooseService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'WhyChoose deleted successfully',
  });
});
