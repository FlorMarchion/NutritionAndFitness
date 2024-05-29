import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../categories/Category";
import { Gender, SizeClothes, categoryClothes } from "../utils/enums";




@Entity()
export class Clothes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column({
        type: 'enum',
        enum: Gender,
        nullable: true,
    })
    gender: Gender;

    @Column({
        type:'enum',
        enum: SizeClothes,
        nullable: true,
    })
    size: SizeClothes;

    @Column({
        type: 'enum',
        enum: categoryClothes,
        nullable: true,
    })
    category_clothes: categoryClothes;


    @ManyToOne(() => Category, (category_product) => category_product.clothes)
    category_product: Category


}