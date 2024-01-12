import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Guide } from "./Guide";

@Entity()
export class CategoryGuide extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  //Relacion Category_Guide
  @OneToMany(() => Guide, (guide) => guide.categoryGuide)
  guides: Guide[];
}
