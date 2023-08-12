import { Router } from "express";
import { ArticleController } from "../controllers/articles.controllers";
import { Article } from "../entities/Articles";
import { Admin } from "../../admin/entities/Admin"

const router = Router();
const articleController = new ArticleController(Article, Admin);

//Crear un artículo
router.post("/articles/:adminId", (req, res) =>
  articleController.createArticles(req, res)
);

//Traer todos los artículos
router.get("/articles", (req, res) => articleController.getArticles(req, res));

//Traer artículos por ID
router.get("/articles/:id", (req, res) =>
  articleController.getArticlesById(req, res)
);

//Modicar artículos por ID
router.put("/articles/:id", (req, res) =>
  articleController.updateArticleById(req, res)
);

//Borrar artículos por ID
router.delete("/articles/:id", (req, res) =>
  articleController.deleteArticleById(req, res)
);
export default router;
