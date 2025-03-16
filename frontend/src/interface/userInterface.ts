export interface IUser {
  _id: string;
  name: string;
  username: string;
  password: string;
  email?: string;
  phone: string;
  role: string;
  isBlocked: boolean;
}
