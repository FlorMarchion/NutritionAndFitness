import { CategoryProducts } from "../utils/enums";
import { Category } from "./Category";
import { Request, Response } from "express";


export class CategoryController {
    constructor(private categoryRepository: typeof Category,
    ) { }

    async createCategory(req: Request, res: Response) {
        try {
            const {
                name,
                description,
            } = req.body

            const categoryCreated = await this.categoryRepository.findOneBy({ name: name })
            if (categoryCreated) {
                throw new Error("This category already exists")
            }

            if (!Object.values(CategoryProducts).includes(name)) {
                return res.status(400).json({ message: "Category does not exists or icorrect category" })
            }

            const category = await this.categoryRepository.create({
                name,
                description,
            })
            await this.categoryRepository.save(category)
            return res.status(200).json({ category })

        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: "Category could not be created" });
            }
        }
        return res.status(500).json({ message: "Internal error" });
    }
}