import React, {useRef, useState} from "react";
import Axios from "axios";
import config from "../config/config";
import "./scss/form.scss";

// Components
import Profile from "../components/profile/Picture";

const ChangePassword = () => {

    const eyesIcon = useRef({hide: "fas fa-eye-slash", unhide: "fas fa-eye"});

    const [showPassword, setShowPassword] = useState<any>({
        current_password: false,
        new_password: false,
        confirm_password: false
    })

    const handleIconPassword = (e: any) => {
        const getName = e.currentTarget.id;

        if (!showPassword[getName]) {
            setShowPassword((prev: any) => (
                {
                    ...prev,
                    [getName]: true
                }
            ))
            return
        }

        setShowPassword((prev: any) => (
            {
                ...prev,
                [getName]: false
            }
        ))
    }

    const changingPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const current_password = formData.get("current_password");
        const new_password: any = formData.get("new_password");
        const confirm_password = formData.get("confirm_password");

        if (new_password.length <= 4) return console.log("Your password must contain at less 5 characters")
        else if (new_password !== confirm_password) return console.log("Password are not same")

        const res = await Axios.post(config.HOST.BACK_END + "/auth/change-password", {
            current_password, new_password, confirm_password
        }, {headers: {"Content-Type": "application/json", "x-access-token": localStorage.getItem("token")}});

        console.log(res.data)

    }

    return (
        <>
        <Profile/>
        <form className="iw_form" onSubmit={changingPassword}>
            <div className="formSection">
                <label className="labelTitle">Current Password</label>

                <label className="inputIcon">
                    <input type={showPassword.current_password ? "text" : "password"} placeholder="Current Password" name="current_password"/>
                    <i id="current_password" className={showPassword.current_password ? eyesIcon.current.unhide : eyesIcon.current.hide} onClick={handleIconPassword}></i>
                </label>
            </div>

            <div className="formSection">
                <label className="labelTitle">New Password</label>

                <label className="inputIcon">
                    <input type={showPassword.new_password ? "text" : "password"} placeholder="New Password" name="new_password"/>
                    <i id="new_password" className={showPassword.new_password ? eyesIcon.current.unhide : eyesIcon.current.hide} onClick={handleIconPassword}></i>
                </label>
            </div>

            <div className="formSection">
                <label className="labelTitle">Confirm Password</label>

                <label className="inputIcon">
                    <input type={showPassword.confirm_password ? "text" : "password"} placeholder="Confirm Password..." name="confirm_password"/>
                    <i id="confirm_password" className={showPassword.confirm_password ? eyesIcon.current.unhide : eyesIcon.current.hide} onClick={handleIconPassword}></i>
                </label>
            </div>

            <button type="submit">Update Password</button>
        </form>
        </>
    )
};

export default ChangePassword;