// Artículos favoritos del usuario

import {
  Entity,
  ManyToOne,
  JoinTable,
  JoinColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";
import { User } from "../../users/entities/User";
import { Article } from "../../articles/entities/Articles";
import { Guide } from "../../guides/entities/Guide";

@Entity() //Es un decorador para indicar que lo siguiente no solo es una clase de javascript, sino que es una tabla dentro de mi base de datos.
export class Favorites extends BaseEntity {
  @PrimaryGeneratedColumn() //Este decorador permite que se genere un id automáticamente a medida que se van incrementando los usuarios.
  id: number;

  @ManyToOne(() => User, (user) => user.favorites, { nullable: true })
  @JoinTable({ name: "userId" })
  user: User;

  @ManyToOne(() => User, (user) => user.favoriteGuides, { nullable: true })
  @JoinTable({ name: "guideId" })
  guide: Guide;

  @ManyToOne(() => User, (user) => user.favoriteArticles, { nullable: true })
  @JoinColumn({ name: "articleId" })
  article: Article;
}
