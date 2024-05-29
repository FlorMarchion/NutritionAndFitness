import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Duration } from "../utils/enums";
import { User } from "../users/entities/User";


@Entity()
export class Plan extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column({
        type: 'enum',
        enum: Duration,
        nullable: true,
    })
    duration: Duration;

    @ManyToOne(() => User, (user) => user.plans)
    @JoinTable()
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}