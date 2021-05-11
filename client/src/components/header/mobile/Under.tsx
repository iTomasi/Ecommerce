import React from "react";
import "./scss/under.scss";

const Under = () => {
    return (
        <header className="MB-header-under">
            <div className="column">
                <i className="fas fa-home"></i>
                <h4>Home</h4>
            </div>

            <div className="column">
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

            <div className="column">
                <i className="fas fa-user-circle"></i>
                <h4>Account</h4>
            </div>
        </header>
    )
};

export default Under;