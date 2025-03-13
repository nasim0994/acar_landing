import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import {
  createUserService,
  loggedUserService,
  loginUserService,
} from './authService';
import httpStatus from 'http-status';

export const createAdmin: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await createUserService(data);

  res.status(200).json({
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

export const loginUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await loginUserService(req.body);
  const { user, accessToken } = result;

  res.status(200).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User is logged in succesfully!',
    data: {
      token: accessToken,
      user,
    },
  });
});

export const loggedUser: RequestHandler = catchAsync(async (req, res) => {
  const user = await loggedUserService(req.user.username);

  res.status(200).json({
    success: true,
    message: 'logged user get successfully',
    data: user,
  });
});
