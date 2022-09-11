import { ICreateRentalDTO } from "../dtos/ICreateRentalDTO";
import { Rental } from "../infra/typeorm/entities/Rental";

export interface IRentalsRepository {
  findOneRentalByCar(car_id: string): Promise<Rental>;
  findOneRentalByUser(user_id: string): Promise<Rental>;
  create({
    user_id,
    car_id,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rental>;
}
