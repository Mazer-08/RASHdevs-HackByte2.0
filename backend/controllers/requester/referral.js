// Controller imports

// Middleware imports

// Model imports
import Referral from "../../db/models/provider/referral.js";
import Provider from "../../db/models/provider/provider.js";
import Requester from "../../db/models/requester/requester.js";

// List referrals based on filters

const listReferral = async (req, res) => {
  try {
    const { position, company } = req.query;
    const where = {};
    if (position && position !== null) {
      where.position = position;
    }
    if (company && company !== null) {
      where.company = company;
    }
    const referrals = await Referral.findAll({
      where,
      exclude: ["providerId"],
    });
    return res.status(200).json({ referrals });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// get referral details


export { listReferral};