import {Request, Response} from "express";

export const POST_register = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.file)
}