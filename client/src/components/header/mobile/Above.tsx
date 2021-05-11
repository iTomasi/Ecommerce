import React from "react";
import "./scss/above.scss";

const Above = () => {
    return (
        <header className="MB-header-above">
            <label className="search" htmlFor="inputSearch">
                <i className="i__search fas fa-search"></i>
                <input id="inputSearch" type="text" placeholder="Search what you need"/>
            </label>

            <i className="i__search fas fa-search"></i>
        </header>
    )
};

export default Above;