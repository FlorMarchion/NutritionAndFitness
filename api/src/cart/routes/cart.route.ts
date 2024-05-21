import { Router } from 'express';
import { CartController } from '../controllers/cart.Controller';
import { Cart } from '../Cart';
import { Guide } from '../../guides/entities/Guide';
import { User } from '../../users/entities/User';

const router = Router();
const cartController = new CartController(Cart, Guide, User);

//Crear Carrito
router.post("/cart", (req, res) => cartController.addGuideToCart(req, res));

//Trar guías del carrito
router.get("/cart/:userId", (req, res) => cartController.getCartGuides(req, res));

export default router;