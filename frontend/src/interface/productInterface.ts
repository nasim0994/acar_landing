export interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  discountPrice?: number;
}
