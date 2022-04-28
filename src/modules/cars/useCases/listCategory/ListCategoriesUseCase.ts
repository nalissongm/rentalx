import { Category } from "../../entities/Category";
import { CategoriesReporitory } from "../../repositories/implementations/CategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoryRepository: CategoriesReporitory) {}

  execute(): Promise<Category[]> {
    const categories = this.categoryRepository.list();

    return categories;
  }
}
