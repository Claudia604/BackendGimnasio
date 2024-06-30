import { Router } from "express";
import { crearClase, editarClase, listarClase, obtenerClase } from "../controllers/clases.controllers.js";

const router = Router();

router.route("/gym").get(listarClase);
router.route("/clases").post(crearClase).get(listarClase);
router.route("/clases/:id").get(obtenerClase).put(editarClase)

export default router;
