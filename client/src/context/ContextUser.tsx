import React, {useState, createContext} from "react";
import config from "../config/config";
import Axios from "axios";

const CC_USER: any = createContext(null);

const ContextUser = ({children}: any) => {
    const [userDatas, setUserDatas] = useState<any>({
        token: {id: "0", first_name: "", last_name: "", email: "", country: "", address: "", province: "", city: "", postal_code: "", phone_code: "", phone_number: "", img: "", iat: 0, exp: 0},
        auth: true
    });

    const isAuthenticated = async () => {
        try {
            const res = await Axios.get(config.HOST.BACK_END + "/auth/", {
                headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
            });

            if (!res.data.auth) return;

            console.log(res.data);
            setUserDatas(res.data);
        }

        catch(e) {
            console.log("?");
            setUserDatas((prev: any) => (
                {...prev, auth: false}
            ))
        }
    };

    return (
        <CC_USER.Provider value={{
            userDatas, isAuthenticated
        }}>
            {children}
        </CC_USER.Provider>
    )
};

export {CC_USER, ContextUser}