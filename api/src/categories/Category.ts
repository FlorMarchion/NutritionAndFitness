import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,

} from "typeorm"
import { Product } from "../product/Product";
import { Guide } from "../guide/Guide";
import { RecipeCollection } from "../recipeCollection/RecipeCollection";
import { Clothes } from "../clothes/Clothes";
import { Supplements } from "../supplements/Supplements";
import { CategoryProducts } from "../utils/enums";


@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: CategoryProducts,
        nullable: true,
    })
    name: CategoryProducts

    @Column()
    description: string;

    @OneToMany(() => Product, (product) => product.category_product)
    product: Product[]

    @OneToMany(() => Guide, (guide) => guide.category_product)
    guides: Guide[]

    @OneToMany(() => Clothes, (clothes) => clothes.category_product)
    clothes: Clothes[]

    @OneToMany(() => RecipeCollection, (recipeCollection) => recipeCollection.category_product)
    recipeCollection: RecipeCollection[]

    @OneToMany(() => Supplements, (supplements) => supplements.category_product)
    supplements: Supplements[]

}