import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/entities/Category";
import { CategoriesRepository } from "@modules/cars/repositories/implementations/CategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: CategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}
