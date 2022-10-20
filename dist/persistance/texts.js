"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTexts = exports.updateText = exports.addText = exports.getTexts = void 0;
const TextModel_1 = require("../models/TextModel");
const getTexts = async () => {
    try {
        const texts = await TextModel_1.TextModel.find({}).sort({
            date: "asc",
        });
        return { success: true, texts: texts.reverse() };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.getTexts = getTexts;
// export const getTextById = async (id: string) => {
//   try {
//     const text: textInterface | null = await TextModel.findById(id);
//     if (!text?._id)
//       return {
//         success: false,
//         error: `No se ha encontrado el texto con la id: ${id}`,
//       };
//     else return { success: true, text };
//   } catch (error: any) {
//     console.log(error.message);
//     return { success: false, error: error.message };
//   }
// };
const addText = async (textData) => {
    try {
        const doc = new TextModel_1.TextModel(textData);
        await doc.save();
        return { success: true, text: doc };
    }
    catch (error) {
        console.log(error);
        return { success: false, error: error.message };
    }
};
exports.addText = addText;
const updateText = async (text) => {
    const { title, description, type, _id } = text;
    if (!(title === null || title === void 0 ? void 0 : title.length) || !(description === null || description === void 0 ? void 0 : description.length) || !(type === null || type === void 0 ? void 0 : type.length)) {
        return { success: false, error: "Hay campos vacíos" };
    }
    try {
        const existingText = await TextModel_1.TextModel.findOne({ _id });
        if (!existingText)
            return { success: false, error: `El texto "${_id}" no existe` };
        const updatedText = await TextModel_1.TextModel.findOneAndUpdate({ _id }, text, {
            new: true,
        });
        if (!updatedText) {
            return { success: false, error: "No se ha podido actualizar el Texto" };
        }
        else
            return { success: true, text: updatedText };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.updateText = updateText;
const deleteTexts = async (idArray) => {
    console.log("delete texts are...:");
    console.log(idArray);
    try {
        const deletedCount = await TextModel_1.TextModel.deleteMany({
            _id: { $in: idArray },
        });
        console.log(deletedCount);
        return { success: true, count: deletedCount };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.deleteTexts = deleteTexts;
