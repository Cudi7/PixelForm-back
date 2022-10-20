"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUsers = exports.addUser = exports.getUsers = void 0;
const UserModel_1 = require("../models/UserModel");
const getUsers = async () => {
    try {
        const users = await UserModel_1.UserModel.find({}).sort({
            date: "asc",
        });
        return { success: true, users: users.reverse(), status: 200 };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message, status: 400 };
    }
};
exports.getUsers = getUsers;
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
const addUser = async (newUserData) => {
    const { email } = newUserData;
    try {
        const existingUser = await UserModel_1.UserModel.findOne({ email });
        if (existingUser)
            return { success: false, error: "User already exists" };
        const doc = new UserModel_1.UserModel(newUserData);
        await doc.save();
        return { success: true, user: doc };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.addUser = addUser;
const deleteUsers = async (idArray) => {
    try {
        const deletedCount = await UserModel_1.UserModel.deleteMany({
            _id: { $in: idArray },
        });
        return { success: true, count: deletedCount };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.deleteUsers = deleteUsers;
const updateUser = async (user) => {
    try {
        const existingUser = await UserModel_1.UserModel.findOne({ _id: user._id });
        if (!existingUser)
            return { success: false, error: `User: ${user.email} doesn't exist` };
        const doc = await UserModel_1.UserModel.findOneAndUpdate({ _id: existingUser._id }, user, {
            returnOriginal: false,
        });
        return { success: true, user: doc };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.updateUser = updateUser;
