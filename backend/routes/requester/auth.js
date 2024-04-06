import { Router } from "express";
const router = Router();

// Controller imports
import { login, register, updateRequester } from "../../controllers/requester/auth.js";

// Middleware imports
import isRequester from "../../middlewares/isRequester.js";

// Model imports

router.post("/login", login);
router.post("/register", register);
router.patch("/update", isRequester, updateRequester);

export default router;
