import React from "react";

interface IOrderPaymentProps {
    orderState: number
}

const OrderPayment = ({orderState}: IOrderPaymentProps) => {
    return (
        <div className="orderPayment" style={{display: orderState === 1 ? "block" : "none"}}>
            <h1>Payment</h1>
        </div>
    )
};

export default OrderPayment;