import React from "react";

interface IOrderDeliveryMapProps {
    displayNum: number
}

const OrderDeliveryMap = ({displayNum}: IOrderDeliveryMapProps) => {
    return (
        <div className="orderDeliveryMap" style={{display: displayNum === 2 ? "block" : "none"}}>
            <h1>Google map Api</h1>
        </div>
    )
};

export default OrderDeliveryMap;