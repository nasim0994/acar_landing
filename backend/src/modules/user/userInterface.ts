export type IUser = {
  name: string;
  username: string;
  password: string;
  email?: string;
  phone: string;
  role: 'admin' | 'superAdmin';
  isBlocked: boolean;
};
