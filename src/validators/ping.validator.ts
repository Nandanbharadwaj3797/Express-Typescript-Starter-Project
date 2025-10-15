import {z} from 'zod';

export const PingValidator = z.object({
  message: z.string().min(1)
});