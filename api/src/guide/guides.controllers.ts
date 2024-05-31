import { Request, Response } from "express";
import { Guide } from "./Guide";
import { DietType, Duration, GoalGuide } from "../utils/enums";
import { Category } from "../categories/Category";
import { Product } from "../product/Product";
import { Admin } from "../admin/Admin";

export class GuideController {
    constructor(private guideRepository: typeof Guide,
        private categoryRepository: typeof Category,
        private productRepository: typeof Product,
        private adminRepository: typeof Admin
    ) { }

    async createGuide(req: Request, res: Response) {
        try {
            const {
                name,
                image,
                description,
                diet_type,
                duration,
                price,
                goal,
                category_product,
            } = req.body;

            const { admin } = req.params;

            const adminFinded = await this.adminRepository.findOne({
                where: {
                    id: parseInt(admin)
                }
            })
            if (!adminFinded) {
                throw new Error("Admin does not exists")
            }
            console.log('administrador encontrado:', adminFinded);

            const createdGuide = await this.productRepository.findOneBy({ name })
            if (createdGuide) {
                throw new Error("This guide already exists")
            }


            const categoryProduct = await this.categoryRepository.findOne({
                where: {
                    id: parseInt(category_product)
                }
            })
            if (!categoryProduct) {
                return res.status(400).json({ message: "Category_product does not exists" })
            }


            if (!Object.values(DietType).includes(diet_type)) {
                return res.status(400).json({ message: "Icorrect diet type" })
            }

            if (!Object.values(Duration).includes(duration)) {
                return res.status(400).json({ message: "Icorrect duration" })
            }

            if (!Object.values(GoalGuide).includes(goal)) {
                return res.status(400).json({ message: "Icorrect goal" })
            }

            const product = await this.productRepository.create({
                name,
                image,
                description,
                price,
                category_product,
                admin: adminFinded
            });
            await this.productRepository.save(product);

            const guide = await this.guideRepository.create({
                diet_type,
                duration,
                goal,
                category_product
            })
            await this.guideRepository.save(guide)
            console.log('GUIA:', { guide, product });
            return res.status(200).json({ guide, product })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
        return res.status(500).json({ message: "Internal Error" });
    }

    
}