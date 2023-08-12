import { Request, Response } from "express";
import { Favorites } from "../entities/Favorites";
import { Guide } from "../../guides/entities/Guide";
import { Article } from "../../articles/entities/Articles";
import { User } from "../../users/entities/User";

export class FavoritesController {
  constructor(
    private favoritesRepository: typeof Favorites,
    private guideRepository: typeof Guide,
    private articleRepositoy: typeof Article,
    private userRepository: typeof User
  ) {}

  async createFavorite(_req: Request, res: Response) {
    try {
      const { user_id, guide_id, article_id } = _req.body;
      
      const guideFinded: any = await this.guideRepository.findOne({
        where: {
          id: guide_id,
        },
      });
      
      const articleFinded: any = await this.articleRepositoy.findOne({
        where: {
          id: article_id,
        },
      });

      const userFinded: any = await this.userRepository.findOne({
        where: {
          id: user_id,
        },
      });

      const favorite = this.favoritesRepository.create({
        user: userFinded,
        guide: guideFinded,
        article: articleFinded,
      });
      await this.favoritesRepository.save(favorite);
      
      if (!favorite) {
        throw new Error("Favorite not created");
      }
      return res.status(200).json({ favorite });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknown error" });
    }
  }
}
