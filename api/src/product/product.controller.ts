import { Admin } from '../admin/Admin';
import { Category } from '../categories/Category';
import { Product } from './Product';
import { Request, Response } from 'express';

export class ProductController {
    constructor(private productRepository: typeof Product,
        private adminRepository: typeof Admin,
        private catetegoryRespository: typeof Category,

    ) { }

    async createProduct(req: Request, res: Response) {
        try {
            const {
                name,
                description,
                image,
                price,
                categoryId,
                adminId
            } = req.body

            const adminFinded = await this.adminRepository.findOne({ where: { id: adminId } })
            if (!adminFinded) {
                throw new Error("Admin does not exists")
            }

            const categoryFinded = await this.catetegoryRespository.findOne({ where: { id: categoryId} })
            if(!categoryFinded) {
                throw new Error("Category does not exists")
            }

            const product = await this.productRepository.create({
                name,
                description,
                image,
                price,
                category_product: categoryFinded,
                admin: adminFinded
            });
            await this.productRepository.save(product)
            return res.status(200).json(product)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: "Product could not be created" });
            }
        }
        return res.status(500).json({ message: "Internal error" });

    }
}