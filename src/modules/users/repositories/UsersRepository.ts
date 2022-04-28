import { User } from "../model/User";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, password, email }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,

      password,

      email,

      created_at: new Date(),
    });

    this.users.push(user);
  }

  findByName(name: string): User {
    const user = this.users.find((user) => user.name === name);

    return user;
  }

  list(): User[] {
    return this.users;
  }
}
