import { DataSource } from "typeorm";
import { User } from "./users/entities/User";
import { Favorites } from "./favorites/entities/Favorites";
import { Review } from "./review/entities/Review";
import { Product } from "./product/Product";
import { Category } from "./categories/Category";
import { Guide } from "./guide/Guide";
import { Clothes } from "./clothes/Clothes";
import { RecipeCollection } from "./recipeCollection/RecipeCollection";
import { Supplements } from "./supplements/Supplements";
import { Plan } from "./plan/Plan";
import { Article } from "./article/Article";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "giuliProjectDb",
  synchronize: true,
  logging: false,
  entities: [User, Favorites, Review, Product, Category, Guide, Clothes, RecipeCollection, Supplements, Plan, Article],
  // subscribers: [],
  // migrations: [],
});
