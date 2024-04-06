import { Router } from "express";
const router = Router();

// Controller imports
import {
  AcceptOrRejectRequest,
  RequestList,
} from "../../controllers/provider/request.js";

// Middleware imports
import isProvider from "../../middlewares/isProvider.js";

// Model imports

router.patch("/request/accept/:id", isProvider, AcceptOrRejectRequest);
router.get("/request", isProvider, RequestList);

export default router;
