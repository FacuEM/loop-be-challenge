import { z } from "zod";
import axios from "axios";

const countryCodeValidator = (countryName: string): Promise<boolean> => {
  return axios
    .get(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.data.length > 0)
    .catch(() => false);
};

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  country: z
    .string()
    .refine(
      (countryName) => countryCodeValidator(countryName),
      "Invalid country name"
    ),
});

export const validateUser = (object: any) => {
  return userSchema.safeParseAsync(object);
};
