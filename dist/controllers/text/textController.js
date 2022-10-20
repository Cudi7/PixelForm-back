"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const texts_1 = require("../../persistance/texts");
const route = express_1.default.Router();
//GET all texts -> /
route.get("/", async (req, res) => {
    const texts = await (0, texts_1.getTexts)();
    return texts.success
        ? res.status(200).json(texts)
        : res.status(400).json(texts);
});
//GET text by id -> texts/:id
// route.get("/:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const text = await getTextById(id);
//   return text.success ? res.status(200).json(text) : res.status(400).json(text);
// });
// POST new text -> texts/new
route.post("/new", async (req, res) => {
    const newText = await (0, texts_1.addText)(req.body);
    return newText.success
        ? res.status(200).json(newText)
        : res.status(400).json(newText);
});
//UPDATE ONE text -> texts/update/:id
route.patch("/update", async (req, res) => {
    const updatedText = await (0, texts_1.updateText)(req.body);
    return updatedText.success
        ? res.status(200).json(updatedText)
        : res.status(400).json(updatedText);
});
//DELETE  texts -> texts/delete/
route.delete("/delete", async (req, res) => {
    const idArray = req.body;
    const deletedTexts = await (0, texts_1.deleteTexts)(idArray);
    return deletedTexts.success
        ? res.status(200).json(deletedTexts)
        : res.status(400).json(deletedTexts);
});
exports.default = route;
