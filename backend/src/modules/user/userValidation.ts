import { z } from 'zod';

export const userValidation = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' }),
  email: z.string().email({ message: 'Invalid email format' }).optional(),
  phone: z
    .string()
    .min(11, { message: 'Phone must be at least 11 characters' }),
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' }),
  role: z.enum(['admin', 'superAdmin']),
  isBlocked: z.boolean().optional(),
});
