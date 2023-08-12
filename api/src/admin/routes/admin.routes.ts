import { Router } from "express";
import { AdminController } from "../controllers/admin.controllers";
import { Admin } from "../entities/Admin";

const router = Router();
const adminController = new AdminController(Admin);

//Crear admin
router.post("/admin", (req, res) => adminController.createAdmin(req, res));

//Buscar todos los admins
router.get("/admin", (req, res) => adminController.getAdmin(req, res));

//Buscar admin por ID
router.get("/admin/:id", (req, res) => adminController.getAdminById(req, res));

//Modificar admin por ID
router.put("/admin/:id", (req, res) =>
  adminController.updateAdminById(req, res)
);

//Borrar admin por ID
router.delete("/admin/:id", (req, res) =>
  adminController.deleteAdminById(req, res)
);
export default router;
