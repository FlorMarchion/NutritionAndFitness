import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../product/Product";


@Entity()
export class Admin extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    password: string;

    @Column()
    instagram: string;

    @Column()
    facebook: string;

    @Column()
    twitter: string;

    @OneToMany(() => Product, (products) => products.admin)
    products: Product[]
}