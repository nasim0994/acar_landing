import config from '../config';
import { IUser } from '../modules/user/userInterface';
import { User } from '../modules/user/userModel';

const superUser: IUser = {
  name: 'superAdmin',
  username: 'superAdmin',
  phone: '1234567890',
  password: config.SUPER_ADMIN_PASSWORD as string,
  role: 'superAdmin',
  isBlocked: false,
};

const seedSuperAdmin = async () => {
  const isSuperAdminExits = await User.findOne({ role: 'superAdmin' });

  if (!isSuperAdminExits) {
    const res = await User.create(superUser);
    if (res) {
      // eslint-disable-next-line no-console
      console.log('Super Admin Created Successfully');
    }
  }
};

export default seedSuperAdmin;
