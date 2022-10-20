import app, { Request, Response } from "express";
import {
  addText,
  updateText,
  getTexts,
  // getTextById,
  deleteTexts,
} from "../../persistance/texts";

const route = app.Router();

//GET all texts -> /
route.get("/", async (req: Request, res: Response) => {
  const texts = await getTexts();

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
route.post("/new", async (req: Request, res: Response) => {
  const newText = await addText(req.body);

  return newText.success
    ? res.status(200).json(newText)
    : res.status(400).json(newText);
});

//UPDATE ONE text -> texts/update/:id
route.patch("/update", async (req: Request, res: Response) => {
  const updatedText = await updateText(req.body);

  return updatedText.success
    ? res.status(200).json(updatedText)
    : res.status(400).json(updatedText);
});

//DELETE  texts -> texts/delete/
route.delete("/delete", async (req: Request, res: Response) => {
  const idArray = req.body;

  const deletedTexts = await deleteTexts(idArray);

  return deletedTexts.success
    ? res.status(200).json(deletedTexts)
    : res.status(400).json(deletedTexts);
});

export default route;
