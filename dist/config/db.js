"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function connectDB() {
    const URL = process.env.MONGODB_URL || "";
    try {
        await (0, mongoose_1.connect)(URL);
        console.log("Connected to MongoDB w/mongoose **___d•ᴗ•b___**");
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = connectDB;
