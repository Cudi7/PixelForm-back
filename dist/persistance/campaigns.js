"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCampaign = exports.getCampaigns = void 0;
const CampaignModel_1 = require("../models/CampaignModel");
const getCampaigns = async () => {
    try {
        const campañas = await CampaignModel_1.CampaignModel.find({});
        if (!campañas[0]._id)
            return { success: false, error: "Algo ha ido mal" };
        return { success: true, campañas };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.getCampaigns = getCampaigns;
const addCampaign = async (campaignData) => {
    try {
        const doc = new CampaignModel_1.CampaignModel(campaignData);
        await doc.save();
        return { success: true, text: doc };
    }
    catch (error) {
        console.log(error.message);
        return { success: false, error: error.message };
    }
};
exports.addCampaign = addCampaign;
