import { Types } from 'mongoose';

export interface IOrder {
  invoiceNumber: string;
  user: {
    name: string;
    phone: string;
  };
  products: {
    product: Types.ObjectId;
    quantity: number;
  }[];
  total: number;
  shipping: number;
  city: string;
  address: string;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  createdAt?: Date;
  updatedAt?: Date;
}
