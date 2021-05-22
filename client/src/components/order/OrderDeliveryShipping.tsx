import React from "react";
import "./scss/orderDeliveryShipping.scss";

interface IOrderDeliveryShippingProps {
    displayNum: number,
    onClickOp1: any,
    onClickOp2: any
}

const OrderDeliveryShipping = ({displayNum, onClickOp1, onClickOp2}: IOrderDeliveryShippingProps) => {
    return (
        <div className="orderDeliveryShipping" style={{display: displayNum === 0 ? "flex" : "none"}}>
            <h2>Select Shipping</h2>

            <div className="options">
                <div className="option" onClick={onClickOp1}>
                    <h3>Delivery to my Address</h3>
                    <h4>Home / office Address</h4>
                </div>

                <div className="option" onClick={onClickOp2}>
                    <h3>OYAYUBI Pick up</h3>
                    <h4>Safe and fast</h4>
                </div>
            </div>
        </div>
    )
};

export default OrderDeliveryShipping;