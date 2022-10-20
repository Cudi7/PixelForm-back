import { centroInterface } from "../interfaces/centroInterface";
import { CentroModel } from "../models/CentroModel";

export const getCentros = async () => {
  try {
    const centros: Array<centroInterface> = await CentroModel.find({});

    if (!centros[0]._id) return { success: false, error: "Algo ha ido mal" };

    return { success: true, centros };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};

export const addCentro = async (centroData: centroInterface) => {
  try {
    const doc = new CentroModel(centroData);
    await doc.save();

    return { success: true, centro: doc };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};
