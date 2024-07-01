import { Router } from "express";
import {
  borrarClase,
  crearClase,
  editarClase,
  listarClase,
  obtenerClase,
} from "../controllers/clases.controllers.js";
import { check } from "express-validator";
import validacionClase from "../helpers/validacionClase.js";

const router = Router();

router.route("/gym").get(listarClase);
router.route("/clases").post([validacionClase], crearClase).get(listarClase);
router
  .route("/clases/:id")
  .get(obtenerClase)
  .put([validacionClase], editarClase)
  .delete(borrarClase);

export default router;
