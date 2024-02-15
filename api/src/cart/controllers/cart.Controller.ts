import { Request, Response } from "express";
import { Cart } from "../Cart";
import { User } from "../../users/entities/User";
import { Guide } from "../../guides/entities/Guide";

export class CartController {
    constructor(private cartRepository: typeof Cart,
        private userRepository: typeof User,
        private guideRepository: typeof Guide,
    ) { }

    async createCart(req: Request, res: Response) {

        const { userId, guideId, totalPrice, isDeleted } = req.body;

        try {
            const user: any = await this.userRepository.findOneBy({
                id: parseInt(userId),
            })
            console.log("Usuario encontrado",user);
            const guide: any = await this.guideRepository.findOneBy({
                id: parseInt(guideId),
            });
            

            if (!user) {
                throw new Error("User not found")
            }

            if (!guide) {
                throw new Error("Guide not found")
            }
            
            const cart = this.cartRepository.create({
                user: user,
                guide: guide,
                totalPrice,
                isDeleted
            })
            await this.cartRepository.save(cart)
            return res.status(200).json(cart);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message })
            }
            return res.status(500).json({ message: "Internal error" })
        }
    }
}