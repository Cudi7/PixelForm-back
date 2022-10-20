"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
// Schema
const UserSchema = new mongoose_1.Schema({
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
exports.UserModel = (0, mongoose_1.model)("Usuarios", UserSchema);
