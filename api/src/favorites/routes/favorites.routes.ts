import { Router } from "express";
import { Favorites } from "../entities/Favorites";
import { FavoritesController } from "../controllers/favorites.controllers";
import { Article } from "../../articles/entities/Articles";
import { Guide } from "../../guides/entities/Guide";
import { User } from "../../users/entities/User";

const router = Router();
const favoritesController = new FavoritesController(
  Favorites,
  Guide,
  Article,
  User
);

//Crear Favorito
router.post("/favorites", (req, res) =>
  favoritesController.createFavorite(req, res)
);

export default router;
