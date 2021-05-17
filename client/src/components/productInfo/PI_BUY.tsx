import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import "./scss/pi_buy.scss";

// CONTEXT
import {CC_PRODUCTS} from "../../context/ContextProducts";

const PI_BUY = ({onClick}: any) => {

    const {id}: any = useParams();

    const {wishedProducts, addWish, removeWish} = useContext(CC_PRODUCTS);

    const isWished = () => {
        if (wishedProducts.findIndex((wished: any) => wished._id === id) === -1) {
            return false
        }

        return true
    }

    const handleWish = () => {
        if (isWished()) return removeWish(id);
        return addWish(id);
    }

    // <i class="fas fa-heart"></i> favorite
    // <i class="far fa-heart"></i> no favorite

    return (
        <div className="pi_buy">
            <i className={`${isWished() ? "i__heartComplete fas" : "i__heartBlank far"} fa-heart`} onClick={handleWish}></i>

            <button type="button" onClick={onClick}>BUY</button>
        </div>
    )
};

export default PI_BUY;