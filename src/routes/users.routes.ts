import { Router } from "express";

import { UsersRepository } from "../modules/users/repositories/UsersRepository";
import { createUserController } from "../modules/users/useCases/createUser";

export const usersRoutes = Router();

const usersRepository = new UsersRepository();

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  const users = usersRepository.list();

  return response.json(users);
});
