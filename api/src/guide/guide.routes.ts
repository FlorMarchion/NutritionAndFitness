import { Router } from "express";
import { GuideController } from "./guides.controllers";
import { Guide } from "./Guide";
import { Category } from "../categories/Category";
import { Product } from "../product/Product";
import { Admin } from "../admin/Admin";


const router = Router();
const guideController = new GuideController(Guide, Category, Product, Admin)

router.post("/guides/:admin", (req, res) => guideController.createGuide(req, res));

export default router;