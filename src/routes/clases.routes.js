import { Router } from "express";
import { crearClase, listarClase } from "../controllers/clases.controllers.js";

const router = Router();

router.route("/gym").get(listarClase);
router.route("/clases").post(crearClase).get(listarClase);

export default router;
