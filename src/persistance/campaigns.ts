import { campaignInterface } from "../interfaces/campaignInterface";
import { CampaignModel } from "../models/CampaignModel";

export const getCampaigns = async () => {
  try {
    const campañas: Array<campaignInterface> = await CampaignModel.find({});

    if (!campañas[0]._id) return { success: false, error: "Algo ha ido mal" };

    return { success: true, campañas };
  } catch (error: any) {
    console.log(error.message);
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
