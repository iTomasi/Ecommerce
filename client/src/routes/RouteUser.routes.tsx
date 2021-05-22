import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";

// Context
import {CC_USER} from "../context/ContextUser";

const RouteUser = ({component: Component, query, rest}: any) => {
    const {userDatas} = useContext(CC_USER);

    return (
        <Route {...rest} render={(props) => {
            if (userDatas.auth) {
                return <Component {...props}/>
            }

            return <Redirect to={"/sign-in?page=" + query}/>
        }}/>
    )
};

export default RouteUser;