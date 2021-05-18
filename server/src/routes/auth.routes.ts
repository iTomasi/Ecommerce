import {Router} from "express";
import userImg_multer from "../config/userImg_multer";
import passport from "passport";
import {POST_register, POST_login, GET_validateUserToken, POST_changePassword} from "../controllers/auth.controllers";

const router = Router();

router.get("/", passport.authenticate("jwt", {session: false}), GET_validateUserToken);
router.post("/sign-up", userImg_multer, POST_register);
router.post("/sign-in", POST_login);
router.post("/change-password", POST_changePassword);

export default router;