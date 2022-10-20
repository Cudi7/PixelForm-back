"use strict";
// import { Schema, model } from "mongoose";
// import { formularioInterface } from "../interfaces/formularioInterface";
// // Schema
// const FormularioSchema = new Schema<formularioInterface>({
//   creado: { type: Date, required: true },
//   creador_id: { type: String, required: true },
//   codigo: { type: String, required: true },
//   titulo: {
//     es: { type: String, required: true },
//     en: String,
//     cat: String,
//   },
//   descripcion: {
//     es: { type: String, required: true },
//     en: String,
//     cat: String,
//   },
//   ultima_modificacion: { type: Date, default: Date.now },
//   activo: { type: Boolean, default: false },
//   date: { type: Date, default: Date.now },
//   bloque: {
//     id: String,
//     numero: String,
//     descripcion: {
//       es: String,
//       en: String,
//       cat: String,
//     },
//     tipo: String,
//     activo: { type: Boolean, default: false },
//     preguntas: [
//       {
//         id: String,
//         numero: String,
//         descripcion: {
//           es: String,
//           en: String,
//           cat: String,
//         },
//         tipo: String,
//         obligatoria: { type: Boolean, default: false },
//         activa: { type: Boolean, default: false },
//         respuestas: [
//           {
//             id: String,
//             numero: String,
//             descripcion: {
//               es: String,
//               en: String,
//               cat: String,
//             },
//           },
//         ],
//       },
//     ],
//   },
// });
// export const FormularioModel = model<formularioInterface>(
//   "Formularios",
//   FormularioSchema
// );
