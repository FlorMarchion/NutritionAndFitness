import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { categorySupplements } from "../utils/enums";
import { Category } from "../categories/Category";


@Entity()
export class Supplements extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column({
        type: 'enum',
        enum: categorySupplements,
        nullable: true,
    })
    category_supplements: categorySupplements;

    @ManyToOne(() => Category, (category_product) => category_product.supplements)
    category_product: Category
}