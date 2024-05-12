import { Request, Response } from "express";

export class CountryController {
  countryModel: any;
  constructor({ countryModel }: { countryModel: any }) {
    this.countryModel = countryModel;
  }

  getAll = async (_req: Request, res: Response) => {
    const movies = await this.countryModel.getAll();

    res.json(movies);
  };
}
