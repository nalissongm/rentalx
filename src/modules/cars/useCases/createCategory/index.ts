import { CategoriesReporitory } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesReporitory.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
