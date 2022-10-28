import { campaignInterface } from "../interfaces/campaignInterface";
import { CampaignModel } from "../models/CampaignModel";

export const getCampaigns = async () => {
  try {
    const campaigns: Array<campaignInterface> = await CampaignModel.find({});

    if (!campaigns.length)
      return { success: false, error: "It looks like there are not campaigns" };

    return { success: true, campaigns };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const addCampaign = async (campaignData: campaignInterface) => {
  try {
    const doc = new CampaignModel(campaignData);
    await doc.save();

    return { success: true, text: doc };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, error: error.message };
  }
};
