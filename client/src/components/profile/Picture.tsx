import React, {useContext} from "react";
import config from "../../config/config";
import "./scss/picture.scss";

// Context
import {CC_USER} from "../../context/ContextUser";


const Picture = () => {

    const {userDatas} = useContext(CC_USER);

    return (
        <div className="picture">
            <img src={config.HOST.BACK_END + "/file?folder=users&file=" + userDatas.token.img} alt="XD"/>
            <h3>{userDatas.token.first_name + " " + userDatas.token.last_name}</h3>
            <h4>{userDatas.token.email}</h4>
        </div>
    )
};

export default Picture;