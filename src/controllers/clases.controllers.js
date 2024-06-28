import { json } from "express";
import Clase from "../database/models/clase.js";

export const listarClases = (req, res) => {
  console.log("Prueba de solicitud get");
  res.send("Desde mi backend");
};

export const crearClase = async (req, res) => {
  try {
    console.log(req.body);
    const claseNueva = new Clase(req.body);
    await claseNueva.save();
    res.status(201).json({
      mensaje: "La clase fue creada correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error, no se pudo crear la clase",
    });
  }
};
