import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../users/entities/User";
import { Guide } from "../guides/entities/Guide";


@Entity()
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    totalPrice: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column()
    isDeleted: boolean;

    // Cart_Users
    @ManyToOne(() => User, user => user.carts)
    user: User;


    // Cart_Guides
    @ManyToMany(() => Guide, guide => guide.carts, { cascade: true })
    @JoinTable()
    guides: Guide[];

}
