import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";

// Context
import {CC_USER} from "../context/ContextUser";

const RouteAuth = ({component: Component, ...rest}: any) => {
    const {userDatas} = useContext(CC_USER);

    return (
        <Route {...rest} render={(props: any) => {
            if (!userDatas.auth || userDatas.token.id === "0") {
                return <Component {...props}/>
            }

            else {
                return <Redirect to="/"/>
            }
        }} />
    )
};

export default RouteAuth;