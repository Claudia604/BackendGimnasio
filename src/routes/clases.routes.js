import { Router } from "express";
import {
  borrarClase,
  crearClase,
  editarClase,
  listarClase,
  obtenerClase,
} from "../controllers/clases.controllers.js";
import validacionClase from "../helpers/validacionClase.js";
import verificarJWT from "../helpers/verificarJWT.js";

const router = Router();

router.route("/gym").get(listarClase);
router
  .route("/clases")
  .post([verificarJWT, validacionClase], crearClase)
  .get(listarClase);
router
  .route("/clases/:id")
  .get(obtenerClase)
  .put([verificarJWT, validacionClase], editarClase)
  .delete(verificarJWT, borrarClase);

export default router;
