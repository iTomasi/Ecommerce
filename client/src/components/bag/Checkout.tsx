import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import "./scss/checkout.scss";

// CONTEXT
import {CC_PRODUCTS} from "../../context/ContextProducts";

const Checkout = () => {
    const history = useHistory();

    const {bagProducts} = useContext(CC_PRODUCTS);

    const subTotal = () => {
        let count: number = 0;

        for (let i = 0; i < bagProducts.length; i++) {

            let count2: number = 0;

            for (let a = 0; a < bagProducts[i].sizes.length; a++) {
                count2 += bagProducts[i].sizes[a].quantity
            }

            const multiplying = count2 * bagProducts[i].price;

            count +=  multiplying
        }

        return count;
    }

    const handleCheckout = () => {
        history.push("/order")
    }

    return (
        <div className="checkout">
            <div className="flex">
                <h3>Sub-Total</h3>
                <h3>${subTotal()}</h3>
            </div>

            <hr/>

            <div className="flex">
                <h3>Total</h3>
                <h3>${subTotal()}</h3>
            </div>

            <button type="button" onClick={handleCheckout}>CHECKOUT</button>
        </div>
    )
};

export default Checkout;