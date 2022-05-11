import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    password,
    email,
    username,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    // const user = await this.usersRepository.;

    // if (user) {
    //   throw new Error("User Already Exixts!");
    // }

    await this.usersRepository.create({
      name,
      password,
      email,
      username,
      driver_license,
    });
  }
}
