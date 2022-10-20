// import { Schema, model } from "mongoose";
// import { campaignInterface } from "../interfaces/campaignInterface";

// // Schema
// const CampaignSchema = new Schema<campaignInterface>({
//   codigo: { type: String, required: true },
//   titulo: {
//     es: { type: String, required: true },
//     en: String,
//     cat: String,
//   },
//   descripcion: {
//     es: String,
//     en: String,
//     cat: String,
//   },
//   inicio: String,
//   fin: String,
//   validada: { type: Boolean, default: false },
//   administracion: String,
//   tipo: { type: String, default: "standard" },
//   activa: { type: Boolean, default: false },
//   investigadores: [{ id: String, nombre: String, email: String }],
//   evaluadores: [{ id: String, nombre: String }],
//   administradores: [{ id: String, nombre: String }],
//   centros_participantes: [{ id: String, nombre: String }],
//   textos_consentimiento: [{ id: String, nombre: String }],
//   formularios: [{ id: String, nombre: String }],
//   link: String,
//   date: { type: Date, default: Date.now },
// });

// export const CampaignModel = model<campaignInterface>(
//   "Campañas",
//   CampaignSchema
// );
