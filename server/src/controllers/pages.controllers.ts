import {Request, Response} from "express";
import Product from "../models/Product";
import fs from "fs";
import path from "path";

export const GET_file = (req: Request, res: Response) => {
    const {folder, file} = req.query;

    const existFolder = fs.existsSync(path.join(__dirname, "../../public/" + folder));

    if (!existFolder) return res.send(`folder: ${folder} not exists`);

    const existFile = fs.existsSync(path.join(__dirname, `../../public/${folder}/${file}`));

    if (!existFile) return res.send(`file: ${folder}/${file} not exists`);

    res.sendFile(path.join(__dirname, `../../public/${folder}/${file}`))
}

export const GET_products = async (req: Request, res: Response) => {

    try {
        const productList = await Product.find();
        res.json(productList)
    }

    catch(e) {
        res.json({message: "Error we are trying to fix it"})
    }
}