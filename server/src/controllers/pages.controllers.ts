import {Request, Response} from "express";
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