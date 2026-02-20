import { z } from 'zod';

export const topUpFormSchema = z.object({
  idNumber: z
    .string()
    .min(3, 'ID Number minimal 3 karakter')
    .max(20, 'ID Number maksimal 20 karakter')
    .nonempty('ID Number harus diisi'),
  email: z
    .string()
    .email('Email tidak valid')
    .nonempty('Email harus diisi'),
  packageId: z
    .number()
    .min(1, 'Paket harus dipilih'),
});

export type TopUpFormData = z.infer<typeof topUpFormSchema>;
