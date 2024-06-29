import { json } from "express";
import Clase from "../database/models/clase.js";

export const listarClase = async (req, res) => {
  try {
    const clases = await Clase.find();
    res.status(200).json(clases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al listar las clases" });
  }
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
