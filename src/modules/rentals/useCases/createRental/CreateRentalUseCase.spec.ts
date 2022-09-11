import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it("should be able to create a new rental", async () => {
    const rentalCreated = await createRentalUseCase.execute({
      car_id: "123testcar",
      user_id: "123testuser",
      expected_return_date: new Date(),
    });

    expect(rentalCreated).toHaveProperty("id");
  });

  it("should not be able to create a new rental if there is another open the same user", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "car_test",
        user_id: "user_test",
        expected_return_date: new Date(),
      });

      await createRentalUseCase.execute({
        car_id: "car_test",
        user_id: "user_test",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if there is another open the same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "car_test",
        user_id: "user_test",
        expected_return_date: new Date(),
      });

      await createRentalUseCase.execute({
        car_id: "car_test",
        user_id: "other_user",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
