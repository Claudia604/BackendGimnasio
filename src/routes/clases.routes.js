import { Router } from "express";
import { listarClases } from "../controllers/clases.controllers.js";

const router = Router();

router.route("/gym").get(listarClases);

export default router;
