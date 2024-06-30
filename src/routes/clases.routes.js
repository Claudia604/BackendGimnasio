import { Router } from "express";
import { crearClase, listarClase, obtenerClase } from "../controllers/clases.controllers.js";

const router = Router();

router.route("/gym").get(listarClase);
router.route("/clases").post(crearClase).get(listarClase);
router.route("/clases/:id").get(obtenerClase)

export default router;
