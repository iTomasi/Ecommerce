import {Router} from "express";
import {GET_file, GET_products} from "../controllers/pages.controllers";

const router = Router();

router.get("/file", GET_file);
router.get("/products", GET_products);

export default router;