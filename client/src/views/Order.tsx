import React, {useContext} from "react";

// Context
import {CC_ORDER} from "../context/ContextOrder";

// Components
import OrderProcess from "../components/order/OrderProcess";
import OrderDelivery from "../components/order/OrderDelivery";
import OrderPayment from "../components/order/OrderPayment";

const Order = () => {

    const {orderState} = useContext(CC_ORDER);

    return (
        <div className="order">
            <OrderProcess processState={orderState}/>
            <OrderDelivery orderState={orderState}/>
            <OrderPayment orderState={orderState}/>
        </div>
    )
};

export default Order;