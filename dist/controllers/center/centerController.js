"use strict";
// import app, { Request, Response } from "express";
// import { addCentro, getCentros } from "../../persistance/centros";
// const route = app.Router();
// //GET all centros -> /
// route.get("/", async (req: Request, res: Response) => {
//   const centros = await getCentros();
//   return centros.success
//     ? res.status(200).json(centros)
//     : res.status(400).json(centros);
// });
// //POST new centro -> /new
// route.post(
//   "/new",
//   //textExists,
//   async (req: Request, res: Response) => {
//     const centro = await addCentro(req.body);
//     return centro.success
//       ? res.status(200).json(centro)
//       : res.status(400).json(centro);
//   }
// );
// export default route;
