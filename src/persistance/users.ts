import { userInterface } from "../interfaces/userInterface";
import { UserModel } from "../models/UserModel";

export const getUsers = async () => {
  try {
    const users: Array<userInterface> = await UserModel.find({}).sort({
      date: "asc",
    });

    return { success: true, users: users.reverse(), status: 200 };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message, status: 400 };
  }
};

// export const getUserById = async (id: string) => {
//   try {
//     const user = await UserModel.findById(id);

//     if (!user?._id) return { success: false, error: "Algo ha ido mal" };

//     return { success: true, user };
//   } catch (error: any) {
//     console.log(error.message);
//     return { success: false, error: error.message };
//   }
// };

export const addUser = async (newUserData: userInterface) => {
  const { email } = newUserData;
  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) return { success: false, error: "El usuario ya existe" };

    const doc = new UserModel(newUserData);
    await doc.save();

    return { success: true, user: doc };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};

export const deleteUsers = async (idArray: string[]) => {
  console.log("delete users are...:");
  console.log(idArray);
  try {
    const deletedCount = await UserModel.deleteMany({
      _id: { $in: idArray },
    });

    return { success: true, count: deletedCount };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};

export const updateUser = async (user: userInterface) => {
  try {
    const existingUser = await UserModel.findOne({ _id: user._id });

    if (!existingUser)
      return { success: false, error: `El usuario ${user.email} no existe` };

    const doc = await UserModel.findOneAndUpdate(
      { _id: existingUser._id },
      user,
      {
        returnOriginal: false,
      }
    );

    return { success: true, user: doc };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};
