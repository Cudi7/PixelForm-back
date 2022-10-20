// import { Schema, model } from "mongoose";
// import { centroInterface } from "../interfaces/centroInterface";

// // Schema
// const CentroSchema = new Schema<centroInterface>({
//   creador_id: { type: String, required: true },
//   nombre: { type: String, required: true },
//   descripcion: { type: String, required: true },
//   responsable_id: { type: String, required: true },
//   participantes: [{ participante_id: String }],
//   campañas: [{ campaña_id: String }],
//   date: { type: Date, default: Date.now },
//   ultima_modificacion: { type: Date, default: Date.now },
//   creado: { type: Date, required: true },
// });

// export const CentroModel = model<centroInterface>("Centros", CentroSchema);
