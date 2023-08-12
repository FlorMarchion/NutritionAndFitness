import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Article } from "../../articles/entities/Articles";
import { Guide } from "../../guides/entities/Guide";

@Entity()
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: String;

  @Column()
  lastName: String;

  @Column()
  email: string;

  @Column()
  password: String;

  @Column()
  instagram: string;

  @Column()
  facebook: string;

  @Column()
  twitter: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;


  //Relacion administrador a articulos
  @OneToMany(()=> Article, (articles)=> articles.admin, {nullable: false})
  article: Article[];

  //Relacion administrador a guias
  @OneToMany(()=> Guide, (guide) => guide.admin, {nullable: false})
  guide: Guide[]

}
