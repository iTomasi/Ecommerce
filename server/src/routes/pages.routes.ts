import {Router} from "express";
import {GET_file} from "../controllers/pages.controllers";

const router = Router();

router.get("/file", GET_file);

export default router;