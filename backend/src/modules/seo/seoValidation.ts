import { z } from 'zod';

export const logoValidation = z.object({
  basic: z.record(z.any({ required_error: 'Basic is required.' })),
  og: z.record(z.any()).optional(),
  custom: z.record(z.any()).optional(),
});
