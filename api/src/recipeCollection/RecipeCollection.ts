import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { categoryRecipes } from "../utils/enums";
import { Category } from "../categories/Category";


@Entity()
export class RecipeCollection extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: categoryRecipes,
        nullable: true,
    })
    category_recipes: categoryRecipes;

    @Column()
    number_recipes: number; // number of recipes


    @Column({ default: 'PDF' })
    format: string;


    @ManyToOne(() => Category, (category_product) => category_product.recipeCollection)
    category_product: Category
}