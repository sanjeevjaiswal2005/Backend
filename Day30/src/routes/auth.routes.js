import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { registerValidater } from "../validation/auth.validator.js";
const authRouter = Router();

authRouter.post("/register", registerValidater, registerUser);

export default authRouter;
