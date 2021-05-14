import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import config from "../config/config";
import countrys from "../config/countrys.json";
import "./scss/profile.scss";

// Context
import {CC_USER} from "../context/ContextUser";

// Components
import Picture from "../components/profile/Picture";

const Profile = () => {
    const history = useHistory();

    const {userDatas} = useContext(CC_USER);

    const getUserFlag = () => {
        if (!userDatas.auth) return "cl";

        const getFlagCode = countrys.filter((country: any) => country.name.toLowerCase() === userDatas.token.country.toLowerCase());

        if (getFlagCode[0] === undefined) return "cl";

        return getFlagCode[0].code.toLowerCase();
    }


    return (
        <div className="profile">
            <Picture/>

            <div className="info">
                <div>
                    <div className="icon">
                        <span className={`flag-icon flag-icon-${getUserFlag()}`}></span>
                    </div>

                    <h3>{userDatas.token.country}</h3>
                </div>
            </div>

            <hr style={{width: "100%"}}/>

            <div className="options">
                <h3 onClick={() => history.push("/profile/change-password")}>Change Password</h3>
                <h3 onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/sign-in";
                }}>Logout</h3>
            </div>
        </div>
    )
};

export default Profile;