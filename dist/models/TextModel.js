"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextModel = void 0;
const mongoose_1 = require("mongoose");
// Schema
const TextsSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    description: String,
    date: { type: Date, default: Date.now },
});
exports.TextModel = (0, mongoose_1.model)("Texts", TextsSchema);
