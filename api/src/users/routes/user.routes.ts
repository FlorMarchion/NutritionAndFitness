import { Router } from "express";
import { User } from "../entities/User";
import { UserController } from "../controllers/user.controllers";
import { Cart } from "../../cart/Cart";

const router = Router();
const userController = new UserController(User, Cart);

//Crear un ususario
router.post("/users", (req, res) => userController.createUser(req, res));

//Obtener usuarios de la base de datos
router.get("/users", (req, res) => userController.getUsers(req, res));

//Obtener usuario por ID
router.get("/users/:id", (req, res) => userController.getUserById(req, res));

//Modificar datos del usuario en la base de datos por id
router.put("/users/:id", (req, res) => userController.updateUser(req, res));

//Eliminar un usuario de la base de datos por id
router.delete("/users/:id", (req, res) => userController.deleteUser(req, res));

export default router;
