"use strict";
// import app, { Request, Response } from "express";
// import { addCampaign, getCampaigns } from "../../persistance/campaigns";
// const route = app.Router();
// //GET all campanas -> /
// route.get("/", async (req: Request, res: Response) => {
//   const campanas = await getCampaigns();
//   return campanas.success
//     ? res.status(200).json(campanas)
//     : res.status(400).json(campanas);
// });
// //POST new campana -> /new
// route.post(
//   "/new",
//   //textExists,
//   async (req: Request, res: Response) => {
//     const campana = await addCampaign(req.body);
//     return campana.success
//       ? res.status(200).json(campana)
//       : res.status(400).json(campana);
//   }
// );
// export default route;
