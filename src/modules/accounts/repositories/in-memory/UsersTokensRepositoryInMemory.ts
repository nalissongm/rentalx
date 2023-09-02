import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokensDTO";
import { UserTokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";

import { IUsersTokensRepository } from "../IUsersTokensRepository";

export class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  private usersTokens: UserTokens[] = [];

  async create({
    user_id,
    refresh_token,
    expires_date,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = new UserTokens();

    Object.assign(userToken, {
      user_id,
      refresh_token,
      expires_date,
    });

    this.usersTokens.push(userToken);

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    const userToken = this.usersTokens.find((userToken) => {
      return (
        userToken.refresh_token === refresh_token &&
        userToken.user_id === user_id
      );
    });

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    const indexOfUserToken = this.usersTokens.indexOf(
      this.usersTokens.find((ut) => ut.user_id === id)
    );

    this.usersTokens.splice(indexOfUserToken);
  }

  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    return this.usersTokens.find(
      (userToken) => userToken.refresh_token === refresh_token
    );
  }
}
