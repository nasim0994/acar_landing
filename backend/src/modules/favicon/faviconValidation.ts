import { z } from 'zod';

export const faviconValidation = z.object({
  favicon: z.string({ required_error: 'Favicon is required.' }),
});
