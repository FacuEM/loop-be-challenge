import { Request, Response } from "express";
import { validateUser } from "../schemas/users";

export class UserController {
  userModel: any;
  constructor({ userModel }: { userModel: any }) {
    this.userModel = userModel;
  }

  getAll = async (_req: Request, res: Response) => {
    const users = await this.userModel.getAll();

    res.json(users);
  };

  create = async (req: Request, res: Response) => {
    const result = await validateUser(req.body);

    if (result.error) {
      return res.status(400).json({ error: result.error.message });
    }

    try {
      const { name, email, country } = result.data;

      const newUser = await this.userModel.create({ name, email, country });

      return res.json(newUser);
    } catch (error) {
      return res.status(404).send((error as Error).message);
    }
  };
}
