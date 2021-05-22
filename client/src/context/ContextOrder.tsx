import React, {useState, createContext} from "react";

const CC_ORDER: any = createContext(null);

const ContextOrder = ({children}: any) => {
    const [orderState, setOrderState] = useState<number>(0);
    const [orderAddress, setOrderAddress] = useState<any>({
        first_name: "",
        last_name: ""
    })

    const handleOrderState = (number: number) => {
        setOrderState(number)
    }

    return (
        <CC_ORDER.Provider value={{
            orderState, handleOrderState, orderAddress, setOrderAddress
        }}>
            {children}
        </CC_ORDER.Provider>
    )
};

export {CC_ORDER, ContextOrder};