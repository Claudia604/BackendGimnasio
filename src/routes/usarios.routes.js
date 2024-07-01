import { Router } from "express";
import { crearUsuario } from "../controllers/usuarios.controllers.js";
import { login } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route('/registrar').post(crearUsuario);
router.route('/').post(login)

export default router;