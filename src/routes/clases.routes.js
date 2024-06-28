import { Router } from "express";
import { crearClase, listarClases } from "../controllers/clases.controllers.js";

const router = Router();

router.route("/gym").get(listarClases);
router.route("/clases").post(crearClase);

export default router;
