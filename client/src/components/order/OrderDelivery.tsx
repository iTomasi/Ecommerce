import React, {useState} from "react";

// Components
import OrderDeliveryShipping from "./OrderDeliveryShipping";
import OrderDeliveryForm from "./OrderDeliveryForm";
import OrderDeliveryMap from "./OrderDeliveryMap";

interface IOrderDeliveryProps {
    orderState: number
}

const OrderDelivery = ({orderState}: IOrderDeliveryProps) => {

    const [deliveryState, setDeliveryState] = useState<number>(0);

    return (
        <div className="orderDelivery" style={{display: orderState  === 0 ? "block" : "none"}}>
            <OrderDeliveryShipping displayNum={deliveryState} onClickOp1={() => setDeliveryState(1)} onClickOp2={() => setDeliveryState(2)}/>
            <OrderDeliveryForm displayNum={deliveryState}/>
            <OrderDeliveryMap displayNum={deliveryState} />
        </div>
    )
};

export default OrderDelivery;