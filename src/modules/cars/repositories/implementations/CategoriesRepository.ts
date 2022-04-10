import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesReporitory implements ICategoriesRepository {
  private categories: Category[];
  private static INSTANCE: CategoriesReporitory;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesReporitory {
    if (!CategoriesReporitory.INSTANCE) {
      CategoriesReporitory.INSTANCE = new CategoriesReporitory();
    }

    return CategoriesReporitory.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}
