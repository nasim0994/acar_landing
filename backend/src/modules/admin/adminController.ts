import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import httpStatus from 'http-status';
import { deleteAdminService, getAllAdminService } from './adminService';

export const deleteAdmin: RequestHandler = catchAsync(async (req, res) => {
  const userId: string = req.params.id;

  await deleteAdminService(userId);

  res.status(200).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User delete successfully',
  });
});

export const getAllAdmins: RequestHandler = catchAsync(async (req, res) => {
  const result = await getAllAdminService();

  res.status(200).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Admins get successfully',
    data: result,
  });
});
