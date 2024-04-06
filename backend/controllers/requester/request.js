import { Op } from "sequelize";

// Controller imports

// Middleware imports

// Model imports
import request from "../../db/models/requests.js";
import Referral from "../../db/models/provider/referral.js";

const MakeRequest = async (req, res) => {
  try {
    const referralId = req.params.id;
    const referral = await Referral.findOne({ where: { id: referralId } });
    if (!referral) {
      return res.status(404).json({ message: "Referral not found" });
    }
    if (referral.availableCount === 0) {
      return res.status(400).json({ message: "Referral not available" });
    }
    const old = await request.findOne({
      where: {
        [Op.and]: [
          { referralId }, // Assuming referralId is a variable containing the referral ID
          { requesterId: req.user.id },
          { status: "pending" },
        ],
      },
    });
    if (old && old.status === "pending") {
      return res
        .status(400)
        .json({ status: "pending", message: "Request already made" });
    } else if (old && old.status === "accepted") {
      return res.status(400).json({
        status: "accepted",
        message: "Request already accepted and hence you cannot make request.",
      });
    } else if (old && old.status === "rejected") {
      return res.status(400).json({
        status: "rejected",
        message: "Request already rejected and hence you cannot make request.",
      });
    }
    const newRequest = await request.create({
      referralId,
      requesterId: req.user.id,
    });

    if (!newRequest) {
      return res.status(400).json({ message: "Request not made" });
    }
    return res.status(201).json({ message: "Request made" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const CheckRequest = async (req, res) => {
  try {
    const referralId = req.params.id;
    const referral = await Referral.findOne({ where: { id: referralId } });
    if (!referral) {
      return res.status(404).json({ message: "Referral not found" });
    }
    const old = await request.findOne({
      where: { referralId, requesterId: req.user.id },
    });
    if (old) {
      return res
        .status(200)
        .json({ status: old.status, message: "Request made" });
    }
    return res
      .status(200)
      .json({ status: "allowed", message: "Request not made" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const RequestList = async (req, res) => {
  try {
    const requests = await request.findAll({
      where: {
        requesterId: req.user.id,
        status: "pending",
      },
      include: [
        {
          model: Referral,
          attributes: ["position", "company", "expiryDate", "availableCount"],
        },
      ],
      nest: true,
      raw: true,
    });
    if (!requests)
      return res.status(404).json({ message: "No requests found" });
    return res.status(200).json({ requests: requests });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { MakeRequest, CheckRequest, RequestList };
