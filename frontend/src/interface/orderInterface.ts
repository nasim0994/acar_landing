export interface IOrder {
  _id: string;
  invoiceNumber: string;
  user: {
    name: string;
    phone: string;
  };
  products: {
    product: {
      _id: string;
      title: string;
      price: number;
      discountPrice: number;
      image: string;
      description: string;
    };
    quantity: number;
  }[];
  total: number;
  shipping: number;
  city: string;
  address: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}
