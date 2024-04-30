import { Router } from "express";
import { Guide } from "../entities/Guide";
import { GuideController } from "../controllers/guides.controllers";
import { Admin } from "../../admin/entities/Admin";
import { CategoryGuide } from "../entities/CategoryGuide";

const router = Router();
const guideController = new GuideController(Guide, Admin, CategoryGuide);

//Crear guías
router.post("/guides/:adminId", (req, res) => guideController.createGuides(req, res));

//Crear Categoria de guias
router.post("/category", (req, res) => guideController.createCategoryGuide(req, res));

// Traer todas las categorias y la relación que tiene con guias
router.get("/categoryGuide", (req, res) => guideController.getAllCategories(req, res))

//Adquirir guías por id de categoría
router.get("/categoryGuide/:categoryId", (req, res) => guideController.getGuideByCategoryId(req, res))

//Adquirir guías
router.get("/guides", (req, res) => guideController.getGuides(req, res));

//Adquirir guías por nombre
router.get("/guides/byTitleOrDescription", (req, res) => guideController.getGuidesByTitleAndDescription(req, res))

router.get("/guides/getByQuery", (req, res) =>{ guideController.getGuidesFiltered(req, res), console.log('HOLA')});

//Adquirir guías por id
router.get("/guides/:id", (req, res) => guideController.getGuideById(req, res));

//Modificar guías por id
router.put("/guides/:id", (req, res) => guideController.updateGuide(req, res));

//Borrar guía de la base de datos por Id
router.delete("/guides/:id", (req, res) =>
  guideController.deleteGuide(req, res)
);

export default router;
