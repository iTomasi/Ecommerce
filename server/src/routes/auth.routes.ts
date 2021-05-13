import {Router} from "express";
import userImg_multer from "../config/userImg_multer";
import {POST_register, POST_login} from "../controllers/auth.controllers";

const router = Router();

router.post("/sign-up", userImg_multer, POST_register);
router.post("/sign-in", POST_login)

export default router;