import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import config from "../../../config/config";
import "./scss/under.scss";

// Context
import {CC_USER} from "../../../context/ContextUser";

const Under = () => {
    const history = useHistory();

    const {userDatas} = useContext(CC_USER);
    
    return (
        <header className="MB-header-under">
            <div className="column" onClick={() => history.push("/")}>
                <i className="fas fa-home"></i>
                <h4>Home</h4>
            </div>

            <div className="column" onClick={() => history.push("/category")}>
                <i className="fas fa-align-center"></i>
                <h4>Category</h4>
            </div>

            <div className="column" onClick={() => history.push("/bag")}>
                <i className="fas fa-shopping-bag"></i>
                <h4>Bag</h4>
            </div>

            <div className="column" onClick={() => history.push("/wishlist")}>
                <i className="fas fa-heart"></i>
                <h4>Wishlist</h4>
            </div>

            <div className="column" onClick={() => {
                userDatas.auth
                ? history.push("/profile")
                : history.push("/sign-in")
            }}>
                {
                    userDatas.auth
                    ? 
                    <>
                    <img src={config.HOST.BACK_END + `/file?folder=users&file=${userDatas.token.img}`} alt={userDatas.token.first_name + " " + userDatas.token.last_name}/>
                    <h4>{userDatas.token.first_name}</h4>
                    </>
                    : 
                    <>
                    <i className="fas fa-user-circle"></i>
                    <h4>Account</h4>
                    </>
                }
            </div>
        </header>
    )
};

export default Under;