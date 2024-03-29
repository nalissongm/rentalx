import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("cars_images")
export class CarImage {
  @PrimaryColumn()
  id: string;

  @Column()
  car_id: string;

  @Column()
  image_name: string;

  @CreateDateColumn()
  created_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
