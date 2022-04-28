import { User } from "../model/User";

export interface ICreateUserDTO {
  name: string;

  password: string;

  email: string;
}

export interface IUsersRepository {
  create({ name, password, email }: ICreateUserDTO): void;

  findByName(name: string): User;

  list(): User[];
}
