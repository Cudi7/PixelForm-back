import { Schema, model } from "mongoose";
import { userInterface } from "../interfaces/userInterface";

// Schema
const UserSchema = new Schema<userInterface>({
  nombre: { type: String, required: true },
  apellido1: String,
  apellido2: String,
  email: { type: String, required: true, unique: true },
  fecha_baja: String,
  sexo: String,
  telefono: String,
  password: { type: String, required: true },
  direccion: String,
  centros_interes: String,
  observaciones: String,
  role: { type: String, required: true },
  date: { type: Date, default: Date.now },
  type: String,
});

export const UserModel = model<userInterface>("Usuarios", UserSchema);
