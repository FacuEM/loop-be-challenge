import { Request, Response } from "express";

export class CountryController {
  countryModel: any;
  constructor({ countryModel }: { countryModel: any }) {
    this.countryModel = countryModel;
  }

  getAll = async (_req: Request, res: Response) => {
    const countries = await this.countryModel.getTopVotedCountries();

    res.json(countries);
  };
}
