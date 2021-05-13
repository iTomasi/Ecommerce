import React from "react";
import code_numbers from "../config/code_numbers.json";
import "./scss/form.scss";

const Register = () => {
    



    return (
        <form className="iw_form">
            <div className="formSection">
                <label className="labelTitle">First Name</label>
                <input className="input" type="text" placeholder="First Name"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Last Name</label>
                <input className="input" type="text" placeholder="Last Name"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Email</label>
                <input className="input" type="text" placeholder="Email"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Password</label>
                <input className="input" type="password" placeholder="Password"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Confirm Password</label>
                <input className="input" type="password" placeholder="Confirm Password"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Country</label>
                <select className="input">
                    <option selected disabled>Select your country</option>
                </select>
            </div>

            <div className="formSection">
                <label className="labelTitle">Address</label>
                <input className="input" type="text" placeholder="Address"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">State / province</label>
                <input className="input" type="text" placeholder="State / province"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">City / district</label>
                <input className="input" type="text" placeholder="City / district"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Postal Code</label>
                <input className="input" placeholder="Postal Code"/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Phone Number</label>
                
                <div className="inputNumber">
                    <select>
                        <option selected disabled>Code</option>
                        {
                            code_numbers.map((code: any) => (
                                <option value={code.code}>{code.name} ({code.code})</option>
                            ))
                        }
                    </select>

                    <input type="text" placeholder="Phone number"/>
                </div>
            </div>

            <div className="formSection formFile">
                <label>IMG</label>
                <span>Select an Img</span>
            </div>

            <button type="submit">Register</button>
        </form>
    )
};

export default Register;