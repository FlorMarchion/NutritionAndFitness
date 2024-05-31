import { Router } from 'express';
import { Admin } from './Admin';
import { AdminController } from './admin.controllers';

const router = Router();
const adminController = new AdminController(Admin);

router.post("/admin", (req, res) => adminController.createAdmin(req, res))

export default router;