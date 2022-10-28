import { Schema, model } from "mongoose";
import { campaignInterface } from "../interfaces/campaignInterface";
import { FormModel } from "./FormModel.ts";
import { TextModel } from "./TextModel";
import { UserModel } from "./UserModel";

// Schema
const CampaignSchema = new Schema<campaignInterface>({
  code: { type: String, required: true },
  title: {
    es: { type: String, required: true },
    en: String,
    cat: String,
  },
  description: {
    es: String,
    en: String,
    cat: String,
  },
  startsAt: String,
  endsAt: String,
  active: { type: Boolean, default: false, required: true },

  // administracion: String,
  type: { type: String, default: "standard", required: true },
  usersAsigned: [{ type: String }],
  textsAsigned: [{ type: String }],
  formsAssigned: [{ type: String }],
  // investigadores: [{ id: String, nombre: String, email: String }],
  // evaluadores: [{ id: String, nombre: String }],
  // administradores: [{ id: String, nombre: String }],
  // centros_participantes: [{ id: String, nombre: String }],
  // textos_consentimiento: [{ id: String, nombre: String }],
  // formularios: [{ id: String, nombre: String }],
  link: String,
  date: { type: Date, default: Date.now },
});

export const CampaignModel = model<campaignInterface>(
  "Campaigns",
  CampaignSchema
);
