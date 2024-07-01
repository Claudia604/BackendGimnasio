import { Router } from "express";
import {
  borrarClase,
  crearClase,
  editarClase,
  listarClase,
  obtenerClase,
} from "../controllers/clases.controllers.js";
import { check } from "express-validator";

const router = Router();

router.route("/gym").get(listarClase);
router.route("/clases").post([],crearClase).get(listarClase);
router
  .route("/clases/:id")
  .get(obtenerClase)
  .put(editarClase)
  .delete(borrarClase);

export default router;
