import {Request, Response} from "express";
import code_numbers from "../config/code_numbers.json";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Account from "../models/Account";
import config from "../config/config";

// Libs
import removeImg from "../libs/removeImg";


export const GET_validateUserToken = (req: Request, res: Response) => {
    const userToken: any = req.headers["x-access-token"];

    try {
        const token = jwt.verify(userToken, config.JWT);

        res.json({token, auth: true})
    }

    catch(e) {
        res.json({auth: false})
    }
}

export const POST_register = async (req: Request, res: Response) => {
    const {first_name, last_name, email, password, confirm_password, country, address, province, city, postal_code, phone_code, phone_number} = req.body;
    let fileName: string = "";
    const emailRegex = new RegExp(/^[a-z0-9_-]+@[a-z]+\.[a-z]{2,3}$/g);
    const phoneRegex = new RegExp(/^[0-9]+$/g);

    if (req.file.filename === undefined) fileName = "default.jpg";
    else fileName = req.file.filename;

    if (!first_name || !last_name || !email || !password || !confirm_password || !country || !address || !province || !city || !postal_code || !phone_code || !phone_number) {
        res.json({message: "Datas missing"});
        
        removeImg(fileName);
        return
    }

    else if (password !== confirm_password) return res.json({message: "Passwords are not same"})
    else if (password.length <= 4) return res.json({message: "your password must contains at less 5 character"})
    else if (!emailRegex.test(email.toLowerCase())) return res.json({message: "Email invalid"})
    else if (code_numbers.findIndex((theCountry: any) => theCountry.name === country) === -1) return res.json({message: "Country not exists"})
    else if (code_numbers.findIndex((theCode: any) => theCode.code === phone_code) === -1) return res.json({message: "The code not exists"})
    else if (!phoneRegex.test(phone_number)) return res.json({message: "Your phone should not contains letters"})


    const checkingIfEmailExist = await Account.find({email});

    if (checkingIfEmailExist) {
        res.json({message: "Email registered"});
        removeImg(fileName);
        return
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    try {
        await new Account({
            first_name, last_name, email, password: hash, country, address, province, city, postal_code, phone_code, phone_number, img: fileName
        }).save();

        res.json({message: "Registered"})
    }

    catch(e) {
        console.log(e)
    }

}

export const POST_login = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    if (!email || !password) return res.json({message: "Datas missing"})

    const user = await Account.findOne({email});

    if (!user) return res.json({message: "Email not exist"})

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) return res.json({message: "Password wrong"})

    const token = jwt.sign({
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        country: user.country,
        address: user.address,
        province: user.province,
        city: user.city,
        postal_code: user.postal_code,
        phone_code: user.phone_code,
        phone_number: user.phone_number,
        img: user.img

    }, config.JWT, {expiresIn: 86400});

    res.json({
        message: "Logged",
        token
    })
}