import React from "react";
import {useHistory} from "react-router-dom";
import "./scss/under.scss";

const Under = () => {
    const history = useHistory();

    const handleAccountColumn = () => {
        history.push("/sign-in")
    }
    
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

            <div className="column">
                <i className="fas fa-shopping-bag"></i>
                <h4>Bag</h4>
            </div>

            <div className="column">
                <i className="fas fa-heart"></i>
                <h4>Wishlist</h4>
            </div>

            <div className="column" onClick={handleAccountColumn}>
                <i className="fas fa-user-circle"></i>
                <h4>Account</h4>
            </div>
        </header>
    )
};

export default Under;