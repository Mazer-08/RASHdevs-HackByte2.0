import { Router } from "express";
const router = Router();

// Controller imports
import {
  createReferral,
  getReferral,
  getReferralById,
  updateReferral,
} from "../../controllers/provider/referral.js";
import isProvider from "../../middlewares/isProvider.js";

// Middleware imports

// Model imports

router.post("/referral/create", isProvider, createReferral);
router.patch("/referral/update/:id", isProvider, updateReferral);
router.get("/referral", isProvider, getReferral);
router.get("/referral/:id", isProvider, getReferralById);

export default router;
