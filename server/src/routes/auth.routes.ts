import {Router} from "express";
import userImg_multer from "../config/userImg_multer";
import {POST_register, POST_login, GET_validateUserToken} from "../controllers/auth.controllers";

const router = Router();

router.get("/", GET_validateUserToken);
router.post("/sign-up", userImg_multer, POST_register);
router.post("/sign-in", POST_login)

export default router;