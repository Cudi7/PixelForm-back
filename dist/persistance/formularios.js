"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFormulario = exports.getFormularios = void 0;
const FormularioModel_1 = require("../models/FormularioModel");
const getFormularios = async () => {
    try {
        const formularios = await FormularioModel_1.FormularioModel.find({});
        if (!formularios[0]._id)
            return { success: false, error: "Algo ha ido mal" };
        return { success: true, formularios };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.getFormularios = getFormularios;
const addFormulario = async (formularioData) => {
    try {
        const doc = new FormularioModel_1.FormularioModel(formularioData);
        await doc.save();
        return { success: true, text: doc };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.addFormulario = addFormulario;
