import { Router } from "express";
const router = Router();

// Controller imports

// Middleware imports
import isRequester from "../../middlewares/isRequester.js";

import { listReferral } from "../../controllers/requester/referral.js";

router.get("/listreferral", isRequester, listReferral);

export default router;
