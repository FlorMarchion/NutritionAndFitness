import { DataSource } from "typeorm";
import { User } from "./users/entities/User";
import { Guide } from "./guides/entities/Guide";
import { Article } from "./articles/entities/Articles";
import { Favorites } from "./favorites/entities/Favorites";
import { Admin } from "./admin/entities/Admin";
import { Review } from "./review/entities/Review";
import { CategoryGuide } from "./guides/entities/CategoryGuide";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "giuliProjectDb",
  synchronize: true,
  logging: false,
  entities: [User, Guide, CategoryGuide, Admin, Article, Favorites, Review],
  // subscribers: [],
  // migrations: [],
});
