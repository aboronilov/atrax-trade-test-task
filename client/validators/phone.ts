import { z } from "zod";

export const registerSchema = z.object({
    phone: z
      .string()
      .min(11, { message: "length should be 11 characters" })
      .max(11, { message: "length should be 11 characters" })
      .startsWith("7", { message: "phone format - 7xxxxxxxxxx" })
  });