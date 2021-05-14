import React, {useContext, useState} from "react";
import config from "../config/config";
import countrys from "../config/countrys.json";
import "./scss/profile.scss";

// Context
import {CC_USER} from "../context/ContextUser";

const Profile = () => {

    const {userDatas} = useContext(CC_USER);

    const getUserFlag = () => {
        if (!userDatas.auth) return "cl";

        const getFlagCode = countrys.filter((country: any) => country.name.toLowerCase() === userDatas.token.country.toLowerCase());

        if (getFlagCode[0] === undefined) return "cl";

        return getFlagCode[0].code.toLowerCase();
    }


    return (
        <div className="profile">
            <div className="picture">
                <img src={config.HOST.BACK_END + "/file?folder=users&file=" + userDatas.token.img} alt="xd"/>
                <h3>{userDatas.token.first_name + " " + userDatas.token.last_name}</h3>
                <h4>{userDatas.token.email}</h4>
            </div>

            <div className="info">
                <div>
                    <div className="icon">
                        <span className={`flag-icon flag-icon-${getUserFlag()}`}></span>
                    </div>

                    <h3>{userDatas.token.country}</h3>
                </div>
            </div>

            <hr style={{width: "100%"}}/>
        </div>
    )
};

export default Profile;