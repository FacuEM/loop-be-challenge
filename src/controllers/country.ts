import { Request, Response } from "express";

export class CountryController {
  constructor(private countryModel: any) {}

  getAll = async (_req: Request, res: Response) => {
    const countries = await this.countryModel.getTopVotedCountries();

    res.json(countries);
  };
}
