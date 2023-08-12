import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Article } from "../../articles/entities/Articles";
import { Guide } from "../../guides/entities/Guide";
import { Favorites } from "../../favorites/entities/Favorites";
import {Review } from "../../review/entities/Review"

@Entity() //Es un decorador para indicar que lo siguiente no solo es una clase de javascript, sino que es una tabla dentro de mi base de datos.
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() //Este decorador permite que se genere un id automáticamente a medida que se van incrementando los usuarios.
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  userName: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  ubication: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true }) // Aca debería ir una imagen por defecto en caso de que el usuario no la proporcione.
  image: string;

  @Column({ nullable: true })
  email: string;

  @Column({
    default: true, //defino un valor por defecto
  })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Favorites, (favorites) => favorites.user)
  @JoinTable()
  favorites: Favorites[];

  //User_Articles
  @OneToMany(() => Article, (article) => article.users)
  @JoinTable()
  favoriteArticles: Article[];

  //User_Guides
  @OneToMany(() => Guide, (guides) => guides.users)
  @JoinTable()
  favoriteGuides: Guide[];

  //User_Reviews
  @OneToMany(()=> Review, (review) => review.users)
  @JoinTable()
  review : Review[]

}
