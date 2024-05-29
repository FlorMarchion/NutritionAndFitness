// Review de las Guias

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/User";
// import { Guide } from "../../guides/entities/Guide";

@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 400 })
  description: string;
  
  @Column({ nullable: true })
  isPublic: boolean;
  
  @CreateDateColumn()
  createdAt: Date;
  
  @DeleteDateColumn()
  deletedAt: Date;
  
  // @ManyToOne(() => Guide, (guide) => guide.reviews)
  // @JoinTable({ name: "guideId" })
  // guide: Guide;

  @ManyToOne(() => User, (user) => user.review, { nullable: true })
  @JoinTable({ name: "userId" })
  users: User;
}
