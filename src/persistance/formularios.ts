import { formularioInterface } from "../interfaces/formularioInterface";
import { FormularioModel } from "../models/FormularioModel";

export const getFormularios = async () => {
  try {
    const formularios: Array<formularioInterface> = await FormularioModel.find(
      {}
    );

    if (!formularios[0]._id)
      return { success: false, error: "Algo ha ido mal" };

    return { success: true, formularios };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};

export const addFormulario = async (formularioData: formularioInterface) => {
  try {
    const doc = new FormularioModel(formularioData);
    await doc.save();

    return { success: true, text: doc };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};
