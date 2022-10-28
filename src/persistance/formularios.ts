import { formInterface } from "../interfaces/formInterface";
import { FormModel } from "../models/FormModel.ts";

export const getFormularios = async () => {
  try {
    const formularios: Array<formInterface> = await FormModel.find({});

    if (!formularios[0]._id)
      return { success: false, error: "Algo ha ido mal" };

    return { success: true, formularios };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};

export const addFormulario = async (formularioData: formInterface) => {
  try {
    const doc = new FormModel(formularioData);
    await doc.save();

    return { success: true, text: doc };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};
