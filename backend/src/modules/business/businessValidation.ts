import { z } from 'zod';

export const businessValidation = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
    .min(1, 'Phone is required'),
  email: z.string().email('Invalid email address').optional(),
  whatsapp: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid WhatsApp number'),
  address: z.string().min(1, 'Address is required'),
  shipping: z.object({
    insideDhaka: z
      .number()
      .positive('Shipping cost inside Dhaka must be positive'),
    outsideDhaka: z
      .number()
      .positive('Shipping cost outside Dhaka must be positive'),
  }),
});

export const businessUpdateValidation = businessValidation.partial();
