"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userImg_multer_1 = __importDefault(require("../config/userImg_multer"));
const auth_controllers_1 = require("../controllers/auth.controllers");
const router = express_1.Router();
router.post("/sign-up", userImg_multer_1.default, auth_controllers_1.POST_register);
exports.default = router;
