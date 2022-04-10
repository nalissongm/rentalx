import { Category } from "../../model/Category";
import { CategoriesReporitory } from "../../repositories/implementations/CategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoryRepository: CategoriesReporitory) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list();

    return categories;
  }
}
