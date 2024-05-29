import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DietType, Duration, GoalGuide } from "../utils/enums";
import { Category } from "../categories/Category";


@Entity()
export class Guide extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @Column({
        type: 'enum',
        enum: DietType,
        nullable: true,
    })
    diet_type: DietType;

    @Column({
        type: 'enum',
        enum: Duration,
        nullable: true,
    })
    duration: Duration;

    @Column({
        type: 'enum',
        enum: GoalGuide,
        nullable: true,
    })
    goal: GoalGuide;

    @ManyToOne(() => Category, (category_product) => category_product.guides)
    category_product: Category

    
}