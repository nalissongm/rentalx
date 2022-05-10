import { UsersRepository } from "../../repositories/UsersRepository";

interface IRequest {
  name: string;

  password: string;

  email: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ name, password, email }: IRequest) {
    const user = this.usersRepository.findByName(name);

    if (user) {
      throw new Error("User Already Exixts!");
    }

    this.usersRepository.create({ name, password, email });
  }
}
