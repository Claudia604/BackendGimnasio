import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionClase = [
  check("clase")
    .notEmpty()
    .withMessage("La clase es obligatoria")
    .isLength({ min: 3, max: 25 })
    .withMessage("La clase debe tener entre 3 y 25 caracteres"),
  check("profesor")
    .notEmpty()
    .withMessage("El profesor es obligatorio")
    .isLength({ min: 5, max: 30 })
    .withMessage("El profesor debe tener entre 5 y 30 caracteres"),
  check("fecha")
    .notEmpty()
    .withMessage("La fecha es obligatoria")
    .matches(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/)
    .withMessage("La fecha debe ser dd/mm/aaaa"),
  check("horario")
    .notEmpty()
    .withMessage("El horario es obligatorio")
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("La hora debe ser entre 00 y 24"),
  check("usuarios")
    .notEmpty()
    .withMessage("Los usuarios son obligatorios")
    .isLength({ min: 3 })
    .withMessage("Los usuarios deben tener como minimo 3 caracteres"),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionClase;
