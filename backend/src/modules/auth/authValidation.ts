import { z } from 'zod';

export const loginValidation = z.object({
  username: z.string({ required_error: 'User Name is required.' }),
  password: z.string({ required_error: 'Password is required' }),
});
