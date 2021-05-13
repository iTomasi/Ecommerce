"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `user__${Date.now()}${path_1.default.extname(file.originalname)}`);
    },
    destination: path_1.default.join(__dirname, "../../public/users")
});
exports.default = multer_1.default({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" || file.mimetype === "image/gif" || file.mimetype === "image/jpeg" || file.mimetype === "image/svg+xml") {
            return cb(null, true);
        }
        return cb(null, false);
    }
}).single("userImg");
