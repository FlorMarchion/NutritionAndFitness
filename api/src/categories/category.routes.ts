import { Router } from "express"
import { CategoryController } from "./category.controller"
import { Category } from "./Category"

const router = Router()
const categoryController = new CategoryController(Category)

router.post('/categoryProduct', (req, res) => categoryController.createCategory(req, res))

export default router;