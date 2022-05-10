import { Router } from "express";

import { UsersRepository } from "../modules/accounts/repositories/UsersRepository";
import { createUserController } from "../modules/accounts/useCases/createUser";

export const usersRoutes = Router();

const usersRepository = new UsersRepository();

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  const users = usersRepository.list();

  return response.json(users);
});
