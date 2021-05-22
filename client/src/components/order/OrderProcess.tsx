import React from "react";
import "./scss/orderProcess.scss";

// Gray #C8C8C8
// Purple #6C28FE

interface IOrderProcessProps {
    processState: number
}

const OrderProcess = ({processState}: IOrderProcessProps) => {

    return (
        <div className="orderProcess">
            <div className="one">
                <h3 style={{
                    background: processState === 0 || processState === 1 || processState === 2 ? "#6C28F2" : "#c8c8c8"
                }}>1</h3>
                <h4 className="delivery">Delivery</h4>
            </div>

            <div className="line-1" style={{
                background: processState === 1 || processState === 2 ? "#6c28fe" : "#c8c8c8"
            }}></div>

            <div className="two">
                <h3 style={{
                    background: processState === 1 || processState === 2 ? "#6c28fe" : "#c8c8c8"
                }}>2</h3>
                <h4>Payment</h4>
            </div>

            <div className="line-2" style={{background: processState === 2 ? "#6c28fe" : "#c8c8c8"}}></div>

            <div className="three">
                <h3 style={{background: processState === 2 ? "#6c28fe" : "#c8c8c8"}}>3</h3>
                <h4>Order check</h4>
            </div>
        </div>
    )
};

export default OrderProcess;