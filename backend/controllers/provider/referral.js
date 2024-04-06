// Controller imports

// Middleware imports

// Model imports
import Referral from "../../db/models/provider/referral.js";
import Provider from "../../db/models/provider/provider.js";
import Requester from "../../db/models/requester/requester.js";

// Create a referral
const createReferral = async (req, res) => {
  try {
    const {
      position,
      company,
      officialLink,
      availableCount,
      details,
      expiryDate,
    } = req.body;

    const provider = await Provider.findOne({id : req.user.id});

    const referral = await Referral.create({
      position,
      company,
      officialLink,
      availableCount,
      details,
      company : provider.company,
      expiryDate,
      providerId: req.user.id,
    });

    if (!referral) {
      return res.status(400).json({ message: "Referral not created" });
    }
    return res.status(201).json({ referral });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a referral
const updateReferral = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      position,
      officialLink,
      availableCount,
      details,
      expiryDate,
    } = req.body;

    const referral = await Referral.findOne({
      where: { id, providerId: req.user.id },
    });

    if (!referral) {
      return res.status(404).json({ message: "Referral not found" });
    }

    const updatedReferral = await referral.update({
      position,
      officialLink,
      availableCount,
      details,
      expiryDate,
    });

    return res.status(200).json({ updatedReferral });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all referrals

const getReferral = async (req, res) => {
  try {
    const referrals = await Referral.findAll({
      where: { providerId: req.user.id },
    });

    if (!referrals) {
      return res.status(404).json({ message: "No referrals found" });
    }

    return res.status(200).json({ referrals });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a referral by id

const getReferralById = async (req, res) => {
  try {
    const { id } = req.params;

    const referral = await Referral.findOne({
      where: { id, providerId: req.user.id },
    });

    if (!referral) {
      return res.status(404).json({ message: "Referral not found" });
    }

    return res.status(200).json({ referral });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createReferral, updateReferral, getReferral, getReferralById };