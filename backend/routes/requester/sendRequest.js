import { Router } from "express";
const router = Router();

// Controller imports

// Middleware imports
import isRequester from "../../middlewares/isRequester.js";

import {MakeRequest} from "../../controllers/requester/sendRequest.js";

// Model imports

router.post("/makerequest/:id", isRequester, MakeRequest);

export default router;