import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/Imprementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./sendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dataProvider: DayjsDateProvider;
let mailProviderInMemory: MailProviderInMemory;

describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    dataProvider = new DayjsDateProvider();
    mailProviderInMemory = new MailProviderInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dataProvider,
      mailProviderInMemory
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProviderInMemory, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "764235",
      email: "faijnot@nacjipe.bg",
      name: "Kenneth Gordon",
      password: "Bs2zlB41",
    });

    await sendForgotPasswordMailUseCase.execute("faijnot@nacjipe.bg");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exits", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("citta@zouzi.jm")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("should be able to create an new users token", async () => {
    const generateTokenMail = jest.spyOn(
      usersTokensRepositoryInMemory,
      "create"
    );

    usersRepositoryInMemory.create({
      driver_license: "045421",
      email: "nukerovuz@puvsoso.bf",
      name: "Alex Hoffman",
      password: "2JEMfy5H",
    });

    await sendForgotPasswordMailUseCase.execute("nukerovuz@puvsoso.bf");

    expect(generateTokenMail).toHaveBeenCalled();
  });
});
