import { Router } from "express";
const router = Router();

// Controller imports

// Middleware imports
import isRequester from "../../middlewares/isRequester.js";

import {MakeRequest, CheckRequest, RequestList} from "../../controllers/requester/request.js";

// Model imports

router.post("/makerequest/:id", isRequester, MakeRequest);
router.get("/checkrequest/:id", isRequester, CheckRequest);
router.get("/requestlist", isRequester, RequestList);


export default router;