import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "../../users/entities/User";
import { Admin } from "../../admin/entities/Admin";
import { Review } from "../../review/entities/Review";
import { CategoryGuide } from "./CategoryGuide";

@Entity()
export class Guide extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  file: string;

  @Column()
  image: String;

  @Column()
  diet: string;

  @Column()
  duration: string;

  @Column({ length: 200 })
  description: string;

  @Column()
  price: number;

  @Column({ default: "PDF" })
  format: string;

  @Column()
  size: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  // Guide_Users = favoritos
  @OneToMany(() => User, (user) => user.favoriteGuides)
  users: User[];

  //Relacion Guias creadas por administrador
  @ManyToOne(() => Admin, (admin) => admin.guide, { nullable: false })
  admin: Admin;

  //Relacion Guias_Reviews
  @OneToMany(() => Review, (review) => review.guide)
  reviews: Review[];

  //Relación Guides_Categories
  @ManyToOne(() => CategoryGuide, (category) => category.guides, {
    nullable: false,
  })
  categoryGuide: CategoryGuide;

  //Relación Guides_Cart
  @OneToMany(() => Guide, guide => guide.guideCarts)
    guideCarts: Guide[];
}
