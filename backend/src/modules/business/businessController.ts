import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import {
  addBusinessService,
  getBusinessService,
  updateBusinessService,
} from './businessService';

export const addBusiness: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await addBusinessService(data);

  res.status(200).json({
    success: true,
    message: 'Business add successfully',
    data: result,
  });
});

export const getBusiness: RequestHandler = catchAsync(async (req, res) => {
  const result = await getBusinessService();

  res.status(200).json({
    success: true,
    message: 'Business get successfully',
    data: result,
  });
});

export const updateBusiness: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const result = await updateBusinessService(data, id);

  res.status(200).json({
    success: true,
    message: 'Business updated successfully',
    data: result,
  });
});
