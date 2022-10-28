import app, { Request, Response } from "express";
import { addCampaign, getCampaigns } from "../../persistance/campaigns";

const route = app.Router();

// //GET all campanas -> /
route.get("/", async (req: Request, res: Response) => {
  const campaigns = await getCampaigns();

  return campaigns.success
    ? res.status(200).json(campaigns)
    : res.status(400).json(campaigns);
});

// //POST new campana -> /new
route.post(
  "/",
  //textExists,
  async (req: Request, res: Response) => {
    const campaign = await addCampaign(req.body);

    return campaign.success
      ? res.status(200).json(campaign)
      : res.status(400).json(campaign);
  }
);

export default route;
