import {Router} from "express";
import userImg_multer from "../config/userImg_multer";
import {POST_register} from "../controllers/auth.controllers";

const router = Router();

router.post("/sign-up", userImg_multer, POST_register)

export default router;