import { z } from 'zod';

export const orderValidation = z.object({
  user: z.object({
    name: z.string().min(1, 'User name is required'),
    phone: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
      .min(1, 'User phone is required'),
  }),
  products: z
    .array(
      z.object({
        product: z.string().min(1, 'Product ID is required'),
        quantity: z
          .number()
          .min(1, 'Quantity must be at least 1')
          .int('Quantity must be an integer'),
      }),
    )
    .min(1, 'At least one product is required'),
  total: z
    .number()
    .positive('Total must be a positive number')
    .min(0, 'Total cannot be less than 0'),
  shipping: z
    .number()
    .positive('Shipping cost must be a positive number')
    .min(0, 'Shipping cost cannot be less than 0'),
  city: z.string().min(1, 'City is required'),
  address: z.string().min(1, 'Address is required'),
  status: z.enum(['pending', 'shipped', 'delivered', 'cancelled']).optional(),
});
