import { Schema, model, Types } from 'mongoose';
import { IOrder } from './orderInterface';

const orderSchema = new Schema<IOrder>(
  {
    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    products: [
      {
        product: {
          type: Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    shipping: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true },
);

export const Order = model<IOrder>('Order', orderSchema);
