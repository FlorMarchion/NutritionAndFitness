import { Request, Response } from "express";
import { Article } from "../entities/Articles";
import { Admin } from "../../admin/entities/Admin"

export class ArticleController {
  constructor(
    private articleRepository: typeof Article, // private userRepository: typeof User, // private favoritesRepository: typeof Favorites,
    private adminRepository: typeof Admin
    ) {}

  async createArticles(req: Request, res: Response) {
    try {
      const { title, description, image, text } = req.body;
      
      const {adminId} = req.params
      const adminIdParams: any = await this.adminRepository.findOneBy({
        id: parseInt(adminId),
      });
      
      const article = this.articleRepository.create({
        title,
        description,
        image,
        text,
        admin: adminIdParams
      });
      await this.articleRepository.save(article); // acá es donde se guarda realmente el objeto article

      if (!article) {
        throw new Error("Article not created");
      }
      return res.status(200).json(article);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknown Error" });
    }
  }

  async getArticles(_req: Request, res: Response) {
    try {
      const articles = await this.articleRepository.find();
      if (articles.length > 0) {
        return res.status(200).json(articles);
      } else {
        const error = new Error("No articles found");
        return res.status(404).json({ messaje: error.message });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ messaje: "Unknown error" });
    }
  }

  async getArticlesById(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const article = await this.articleRepository.findOneBy({
        id: parseInt(id),
      });
      if (!article) {
        return res.status(404).json({ message: "Article does not exist" });
      }
      return res
        .status(200)
        .json({ article, message: "Getting article by ID" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateArticleById(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const article = await this.articleRepository.findOne({
        where: {
          id: parseInt(id),
        },
      });

      if (!article) {
        return res.status(404).json({ message: "Article does not exist" });
      }

      await this.articleRepository.update({ id: parseInt(id) }, _req.body);
      return res
        .status(200)
        .json({ message: "Successfully modified article !" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }

  async deleteArticleById(_req: Request, res: Response) {
    try {
      const { id } = _req.params;
      const articleId = await this.articleRepository.findOne({
        where: {
          id: parseInt(id),
        },
      });

      if (!articleId) {
        return res.status(404).json({ message: "Article does not exist" });
      }
      await this.articleRepository.delete({ id: parseInt(id) });
      res.status(200).json({ message: "Article deleted successfully!" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
