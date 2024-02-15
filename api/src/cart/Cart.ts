import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../users/entities/User";
import { Guide } from "../guides/entities/Guide";


@Entity()
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'decimal', precision: 10, scale: 2})
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
    @OneToOne(() => User, user => user.cart)
    @JoinColumn()
    user: User;

    // Cart_Guides
    @ManyToOne(() => Guide, guide => guide.guideCarts)
    @JoinTable()
    guide: Guide;

}