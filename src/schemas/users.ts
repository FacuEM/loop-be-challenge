import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  country: z.string(),
});

export const validateUser = (object: any) => {
  return userSchema.safeParse(object);
};
