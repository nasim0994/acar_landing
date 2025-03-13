import express from 'express';
const Router = express.Router();
import verifyValidate from '../../middlewares/verifyValidate';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import { orderValidation } from './orderValidation';
import {
  addOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
} from './orderController';

Router.post('/add', verifyValidate(orderValidation), verifyAdmin, addOrder);
Router.get('/all', verifyAdmin, getAllOrders);
Router.get('/:id', verifyAdmin, getOrderById);
Router.delete('/:id', verifyAdmin, deleteOrder);
Router.put('/:id', verifyAdmin, updateOrderStatus);

export const orderRoute = Router;
