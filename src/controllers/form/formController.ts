// import app, { Request, Response } from "express";
// import { addFormulario, getFormularios } from "../../persistance/formularios";

// const route = app.Router();

// //GET all formularios -> /
// route.get("/", async (req: Request, res: Response) => {
//   const formularios = await getFormularios();

//   return formularios.success
//     ? res.status(200).json(formularios)
//     : res.status(400).json(formularios);
// });

// //POST new formulario -> /new
// route.post(
//   "/new",
//   //textExists,
//   async (req: Request, res: Response) => {
//     const formulario = await addFormulario(req.body);

//     return formulario.success
//       ? res.status(200).json(formulario)
//       : res.status(400).json(formulario);
//   }
// );

// export default route;
