import { Router } from "express";
const router = Router();

// Controller imports
import { login, register, updateProvider } from "../../controllers/provider/auth.js";

// Middleware imports
import isProvider from "../../middlewares/isProvider.js";

// Model imports

router.post("/login", login);
router.post("/register", register);
router.patch("/update", isProvider, updateProvider);

export default router;
