import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const createUserController = new CreateUserController();

export const usersRoutes = Router();

usersRoutes.post("/", createUserController.handle);

// usersRoutes.get("/", (request, response) => {
//   const users = usersRepository.list();

//   return response.json(users);
// });
