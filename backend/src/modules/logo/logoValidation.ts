import { z } from 'zod';

export const logoValidation = z.object({
  logo: z.string({ required_error: 'Logo is required.' }),
});
