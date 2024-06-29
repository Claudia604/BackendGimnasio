import mongoose, { Schema } from "mongoose";

const claseSchema = new Schema({
  clase: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 25,
    unique: true,
  },
  profesor: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 30,
    unique: true,
  },
  fecha: {
    type: String,
    require: true,
    validate: {
      validator: (fechaClase) => {
        return /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/.test(
          fechaClase
        );
      },
    },
  },
  horario: {
    type: String,
    require: true,
    validate: {
      validator: (horaClase) => {
        return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(horaClase);
      },
    },
  },
});

const Clase = mongoose.model("clase", claseSchema);

export default Clase;
