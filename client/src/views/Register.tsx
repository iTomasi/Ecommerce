import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import path from "path";
import Axios from "axios";
import config from "../config/config";
import code_numbers from "../config/code_numbers.json";
import "./scss/form.scss";

const Register = () => {
    const history = useHistory();
    
    const [fileName, setFileName] = useState<string>("Select an Img");


    const handleInputFile = (e: any) => {
        try {
            const getFileName = e.currentTarget.files[0].name;

            getFileName.length >= 10
            ? setFileName(getFileName.substring(0, 10) + ".." + path.extname(getFileName))
            : setFileName(getFileName)
        }

        catch(e) {
            setFileName("Select an Img");
        }
    }

    const sendingDatas = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const first_name = formData.get("first_name");
        const last_name = formData.get("last_name");
        const email = formData.get("email");
        const password: any = formData.get("password");
        const confirm_password = formData.get("confirm_password");
        const country = formData.get("country");
        const address = formData.get("address");
        const province = formData.get("province");
        const city = formData.get("city");
        const postal_code = formData.get("postal_code");
        const phone_code = formData.get("phone_code");
        const phone_number: any = formData.get("phone_number");

        if (!first_name) return console.log("First name missing")
        else if (!last_name) return console.log("last name missing")
        else if (!email) return console.log("email missing")
        else if (!password || password.length < 4) return console.log("Password must contain at less 5 characters")
        else if (password !== confirm_password) return console.log("Passwords are not same")
        else if (!country || code_numbers.findIndex((theCountry: any) => theCountry.name === country) === -1) return console.log("Country missing")
        else if (!address) return console.log("Address missing")
        else if (!province) return console.log("Province missing")
        else if (!city) return console.log("City missing")
        else if (!postal_code) return console.log("Postal code missing")
        else if (!phone_code || code_numbers.findIndex((theCode: any) => theCode.code === phone_code) === -1) return console.log("Phone code missing")
        else if (!phone_number) return console.log("number missing")
        else if (isNaN(parseInt(phone_number))) return console.log("your number not should contains letters")
    
        const res = await Axios.post(config.HOST.BACK_END + "/auth/sign-up", formData);

        if (res.data.message !== "Registered") return console.log(res.data);


        history.push("/sign-in")
    }

    return (
        <form className="iw_form" onSubmit={sendingDatas}>
            <div className="formSection">
                <label className="labelTitle">First Name</label>
                <input className="input" type="text" placeholder="First Name" name="first_name"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Last Name</label>
                <input className="input" type="text" placeholder="Last Name" name="last_name"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Email</label>
                <input className="input" type="text" placeholder="Email" name="email"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Password</label>
                <input className="input" type="password" placeholder="Password" name="password"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Confirm Password</label>
                <input className="input" type="password" placeholder="Confirm Password" name="confirm_password"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Country</label>
                <select className="input" name="country">
                    <option selected disabled>Select your country</option>
                    {
                        code_numbers.map((country: any, index: any) => (
                            <option key={index} value={country.name}>{country.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="formSection">
                <label className="labelTitle">Address</label>
                <input className="input" type="text" placeholder="Address" name="address"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">State / province</label>
                <input className="input" type="text" placeholder="State / province" name="province"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">City / district</label>
                <input className="input" type="text" placeholder="City / district" name="city"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Postal Code</label>
                <input className="input" placeholder="Postal Code" name="postal_code"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Phone Number</label>
                
                <div className="inputNumber">
                    <select name="phone_code">
                        <option selected disabled>Code</option>
                        {
                            code_numbers.map((code: any) => (
                                <option value={code.code}>{code.name} ({code.code})</option>
                            ))
                        }
                    </select>

                    <input type="text" placeholder="Phone number" name="phone_number"/>
                </div>
            </div>

            <div className="formSection formFile">
                <label htmlFor="inputFile">IMG</label>
                <span>{fileName}</span>
                <input id="inputFile" type="file" onChange={handleInputFile} name="userImg" style={{display: "none"}}/>
            </div>

            <button type="submit">Register</button>
        </form>
    )
};

export default Register;