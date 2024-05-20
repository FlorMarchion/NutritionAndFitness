import { Request, Response } from "express";
import { Cart } from "../Cart";
import { Guide } from "../../guides/entities/Guide";
import { User } from "../../users/entities/User";


export class CartController {
    constructor(private cartRepository: typeof Cart,
        private guideRepository: typeof Guide,
        private userRepository: typeof User,

    ) { }

    async addGuideToCart(req: Request, res: Response) {
        const { userId, guideId, totalPrice } = req.body;

        try {
            // Buscar el usuario
            const user = await this.userRepository.findOne({ where: { id: userId } });

            if (!user) {
                return res.status(404).json({ message: "User does not exist" });
            }

            // Buscar el carrito del usuario
            let cart = await this.cartRepository.findOne({
                where: { user: { id: userId } },
                relations: ["guides"]
            });

            if (!cart) {
                return res.status(404).json({ message: "Cart does not exist for this user" });
            }

            // Verificar si la guía ya está en el carrito
            const guideInCart = cart.guides.find(guide => guide.id === parseInt(guideId));

            if (guideInCart) {
                return res.status(409).json({ message: "Guide already exists in cart" });
            } else {
                // Buscar la guía por su ID
                const guide = await this.guideRepository.findOne({
                    where: {
                        id: parseInt(guideId),
                        price: totalPrice,
                    }
                });

                if (!guide) {
                    return res.status(404).json({ message: "Guide not found" });
                }

                // Agregar la guía al carrito
                cart.guides.push(guide);
                await this.cartRepository.save(cart);
            }
            return res.status(200).json(cart);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
            return res.status(500).json({ message: "Internal error" });
        }
    }
}