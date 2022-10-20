"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCentro = exports.getCentros = void 0;
const CentroModel_1 = require("../models/CentroModel");
const getCentros = async () => {
    try {
        const centros = await CentroModel_1.CentroModel.find({});
        if (!centros[0]._id)
            return { success: false, error: "Algo ha ido mal" };
        return { success: true, centros };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.getCentros = getCentros;
const addCentro = async (centroData) => {
    try {
        const doc = new CentroModel_1.CentroModel(centroData);
        await doc.save();
        return { success: true, centro: doc };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.addCentro = addCentro;
