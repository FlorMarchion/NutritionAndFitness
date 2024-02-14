import { BaseEntity, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Article } from "../../articles/entities/Articles";
import { Guide } from "../../guides/entities/Guide";


@Entity()
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // Cart_User
    @OneToOne(() => User, user => user.cart)
    @JoinColumn()
    user: User;

    // Cart_Guides
    @ManyToOne(() => Guide, guide => guide.guideCarts)
    @JoinColumn()
    guide: Guide;

    // Cart_Articles
    @ManyToOne(() => Article, article => article.articleCarts)
    @JoinColumn()
    article: Article;
}
