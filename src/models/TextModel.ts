import { Schema, model } from "mongoose";
import { textInterface } from "../interfaces/textInterface";

// Schema
const TextsSchema = new Schema<textInterface>({
  type: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  description: String,
  date: { type: Date, default: Date.now },
});

export const TextModel = model<textInterface>("Texts", TextsSchema);
