import { Router } from 'express';
import { CartController } from '../controllers/cart.Controller';
import { User } from '../../users/entities/User';
import { Guide } from '../../guides/entities/Guide';
import { Cart } from '../Cart';

const router = Router();
const cartController = new CartController(Cart, User, Guide);

//Crear Carrito
router.post("/cart", (req, res) => cartController.createCart(req, res));

export default router;