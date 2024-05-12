import { Router } from "express";
import { CountryController } from "../controllers/country";

export const createCountryRouter = ({ countryModel }: any) => {
  const router = Router();

  const countryController = new CountryController({ countryModel });

  router.get("/", countryController.getAll);

  return router;
};
