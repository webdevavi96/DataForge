import { Router } from "express";
import { register, login, logout } from "./controller.js";
import { authJwt } from "./midleware.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(authJwt, logout);

export default router;
