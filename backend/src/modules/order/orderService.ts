import { Order } from './orderModel';
import { IOrder } from './orderInterface';
import QueryBuilder from '../../builders/QueryBuilder';

const generateInvoiceNumber = async () => {
  let invoiceNumber = '00001';

  const lastOrder = await Order.findOne().sort({ createdAt: -1 });
  if (lastOrder && lastOrder?.invoiceNumber) {
    const invoiceNb = lastOrder?.invoiceNumber;
    const newNumber = parseInt(invoiceNb) + 1;
    invoiceNumber = `${newNumber.toString().padStart(4, '0')}`;
  }

  return invoiceNumber;
};

export const addOrderService = async (data: Partial<IOrder>) => {
  const invoiceNumber = await generateInvoiceNumber();
  const result = await Order.create({ ...data, invoiceNumber });
  return result;
};

export const getAllOrdersService = async (query: Record<string, unknown>) => {
  const orderQuery = new QueryBuilder(
    Order.find().populate('products.product'),
    query,
  )
    .search(['invoiceNumber'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await orderQuery.countTotal();
  const result = await orderQuery.modelQuery;

  return {
    meta,
    result,
  };
};

export const getOrderByIdService = async (id: string) => {
  const order = await Order.findById(id).populate('products.product');
  return order;
};

export const deleteOrderService = async (id: string) => {
  const order = await Order.findByIdAndDelete(id);
  return order;
};

export const updateOrderStatusService = async (id: string, status: string) => {
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
  return order;
};
