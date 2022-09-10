import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car description",
      brand: "Car_brand",
      category_id: "category_id",
      daily_rate: 160.0,
      fine_amount: 60,
      license_plate: "DEF-5555",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 2",
      description: "Car description",
      brand: "Car_brand_test",
      category_id: "category_id",
      daily_rate: 160.0,
      fine_amount: 60,
      license_plate: "DEF-5555",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car description",
      brand: "Car_brand_test",
      category_id: "category_id",
      daily_rate: 160.0,
      fine_amount: 60,
      license_plate: "DEF-5555",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car 3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 4",
      description: "Car description",
      brand: "Car_brand_test",
      category_id: "category_id_test",
      daily_rate: 160.0,
      fine_amount: 60,
      license_plate: "DEF-5555",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id_test",
    });

    expect(cars).toEqual([car]);
  });
});
