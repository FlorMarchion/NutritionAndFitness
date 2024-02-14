import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "../../users/entities/User";
import { ArticleStatus } from "../../utils/enums";
import { Admin } from "../../admin/entities/Admin";

@Entity() //Es un decorador para indicar que lo siguiente no solo es una clase de javascript, sino que es una tabla dentro de mi base de datos.
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn() //Este decorador permite que se genere un id automáticamente a medida que se van incrementando los usuarios.
  id: number;

  @Column()
  title: string;

  @Column({ length: 200 })
  description: string;

  @Column()
  text: string; // Este es todo el artículo escrito

  @Column({ default: ArticleStatus.active })
  status: ArticleStatus;

  @Column()
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  // Article_Users = favorites

  @OneToMany(() => User, (user) => user.favoriteArticles)
  users: User[];

  //Relacion articulos a administrador
  @ManyToOne(() => Admin, (admin) => admin.article, { nullable: false })
  admin: Admin;

  // Article_Cart
  @OneToMany(() => Article, article => article.articleCarts)
  articleCarts: Article[];
}
