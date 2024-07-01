import Usuario from "../database/models/usuario.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    const { email, password, nombreUsuario } = req.body;
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res
        .status(400)
        .json({ mensaje: "Este correo ya se encuentra registrado" });
    }
    const saltos = bcrypt.genSaltSync(10);
    const passwordHasheado = bcrypt.hashSync(password, saltos);
    const nuevoUsuario = new Usuario(req.body);
    nuevoUsuario.password = passwordHasheado;
    nuevoUsuario.save();
    res.status(201).json({ mensaje: "El usuario se creo correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ mensaje: "Ocurrio un error al intentar crear un usuario" });
  }
};
