import { TypeOf, z } from 'zod';

export const checkoutSchema = z.object({
  name: z
    .string({
      required_error: 'form_input_name_require_error',
      invalid_type_error: 'Name must be a string',
    })
    .min(1),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10),
  address: z.string({
    required_error: 'Name is required',
  }),
  zip: z.string().min(4),
  city: z.string(),
  country: z.string(),
  payment: z.string(),
  e_money: z.string().optional(),
  e_money_pin: z.string().optional(),
});

export type checkoutSchemaInput = TypeOf<typeof checkoutSchema>;
