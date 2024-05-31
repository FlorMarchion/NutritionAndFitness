import { Router } from "express";
import { Product } from "./Product";
import { ProductController } from "../product/product.controller";
import { Admin } from "../admin/Admin";
import { Category } from "../categories/Category";

const router = Router();
const productController = new ProductController(Product, Admin, Category);


router.post("/product", (req, res) => productController.createProduct(req, res));

export default router
