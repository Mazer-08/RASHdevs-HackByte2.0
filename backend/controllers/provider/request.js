// Controller imports

// Middleware imports

// Model imports
import Referral from "../../db/models/provider/referral.js";
import Provider from "../../db/models/provider/provider.js";
import Requester from "../../db/models/requester/requester.js";
import request from "../../db/models/requests.js";

// Accept a request
const AcceptOrRejectRequest = async (req, res) => {
  try {
    const requestId = req.params.id;
    const { status } = req.body;
    const reqFound = await request.findOne({ where: { id: requestId } });
    if (!reqFound) {
      return res.status(400).json({ message: "Request not found" });
    }
    if (status === "accepted") {
      const updated = await request.update(
        { status: "accepted" },
        { where: { id: requestId } }
      );
      if (!updated) {
        return res.status(400).json({ message: "Request not updated" });
      }
      const referral = await Referral.findOne({
        where: { id: reqFound.referralId },
      });
      if (!referral) {
        return res.status(400).json({ message: "Referral not found" });
      }
      const updateReferral = await Referral.update(
        { availableCount: referral.availableCount - 1 },
        { where: { id: reqFound.referralId } }
      );
      if (!updateReferral) {
        return res.status(400).json({ message: "Referral not updated" });
      }
      //   const provider = await Provider.findOne({
      //     where: { id: referral.providerId },
      //   });
      //   if (!provider) {
      //     return res.status(400).json({ message: "Provider not found" });
      //   }
      //   const requester = await Requester.findOne({
      //     where: { id: reqFound.requesterId },
      //   });
      //   if (!requester) {
      //     return res.status(400).json({ message: "Requester not found" });
      //   }
      return res.status(200).json({
        message: "Request accepted",
        referral,
      });
    } else if (status === "rejected") {
      const updated = await request.update(
        { status: "rejected" },
        { where: { id: requestId } }
      );
      if (!updated) {
        return res.status(400).json({ message: "Request not updated" });
      }
      return res.status(200).json({ message: "Request rejected" });
    }
    return res.status(400).json({ message: "Invalid status" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// list all requests

const RequestList = async (req, res) => {
  console.log(req.user);
  try {
    const requests = await request.findAll({
      include: [
        {
          model: Referral,
          where: {
            providerId: req.user.id,
          },
          // include: [
          //   {
          //     model: Provider, // Assuming Provider is the name of your Provider model
          //   }
          // ],
          // exclude: ["password", "createdAt", "updatedAt"]
        },
      ],
      exclude: ["availableCount", "createdAt", "updatedAt"],
    });
    return res.status(200).json({ requests });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { AcceptOrRejectRequest, RequestList };
