import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesReporitory } from "../../modules/cars/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesReporitory",
  CategoriesReporitory
);
