import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import {
  addOrderService,
  deleteOrderService,
  getAllOrdersService,
  getOrderByIdService,
  updateOrderStatusService,
} from './orderService';

export const addOrder: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await addOrderService(data);

  res.status(200).json({
    success: true,
    message: 'Order add successfully',
    data: result,
  });
});

export const getAllOrders: RequestHandler = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await getAllOrdersService(query);

  res.status(200).json({
    success: true,
    message: 'Orders fetched successfully',
    data: result,
  });
});

export const getOrderById: RequestHandler = catchAsync(async (req, res) => {
  const result = await getOrderByIdService(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Order fetched successfully',
    data: result,
  });
});

export const deleteOrder: RequestHandler = catchAsync(async (req, res) => {
  const result = await deleteOrderService(req.params.id);
  res.status(200).json({
    success: true,
    message: 'Order deleted successfully',
    data: result,
  });
});

export const updateOrderStatus: RequestHandler = catchAsync(
  async (req, res) => {
    const { status } = req.body;
    const id = req.params.id;
    const result = await updateOrderStatusService(id, status);
    res.status(200).json({
      success: true,
      message: 'Order status updated successfully',
      data: result,
    });
  },
);
