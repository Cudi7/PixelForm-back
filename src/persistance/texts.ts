import { textInterface } from "../interfaces/textInterface";
import { TextModel } from "../models/TextModel";

export const getTexts = async () => {
  try {
    const texts: Array<textInterface> = await TextModel.find({}).sort({
      date: "asc",
    });

    return { success: true, texts: texts.reverse() };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};

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

export const addText = async (textData: textInterface) => {
  try {
    const doc = new TextModel(textData);
    await doc.save();

    return { success: true, text: doc };
  } catch (error: any) {
    console.log(error);
    return { success: false, error: error.message };
  }
};

export const updateText = async (text: textInterface) => {
  const { title, description, type, _id } = text;

  if (!title?.length || !description?.length || !type?.length) {
    return { success: false, error: "Hay campos vacíos" };
  }

  try {
    const existingText = await TextModel.findOne({ _id });

    if (!existingText)
      return { success: false, error: `El texto "${_id}" no existe` };

    const updatedText: textInterface | null = await TextModel.findOneAndUpdate(
      { _id },
      text,
      {
        new: true,
      }
    );

    if (!updatedText) {
      return { success: false, error: "No se ha podido actualizar el Texto" };
    } else return { success: true, text: updatedText };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};

export const deleteTexts = async (idArray: string[]) => {
  console.log("delete texts are...:");
  console.log(idArray);
  try {
    const deletedCount = await TextModel.deleteMany({
      _id: { $in: idArray },
    });

    console.log(deletedCount);

    return { success: true, count: deletedCount };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};
