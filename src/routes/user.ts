import { Router } from "express";
import { UserController } from "../controllers/user";

export const createUserRouter = ({ userModel }: any) => {
  const router = Router();

  const userController = new UserController({ userModel });

  router.post("/", userController.create);

  router.get("/", userController.getAll);

  return router;
};
