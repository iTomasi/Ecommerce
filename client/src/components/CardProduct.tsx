import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import config from "../config/config";
import "./scss/cardProduct.scss";

// Context
import {CC_PRODUCTS} from "../context/ContextProducts";

interface ICardProduct {
    id: string,
    img: string,
    name: string,
    category: string[],
    price: number,
    oldPrice: number

}

const CardProduct = ({id, img, name, category, price, oldPrice}: ICardProduct) => {
    const history = useHistory();

    const {addWish, removeWish, wishedProducts} = useContext(CC_PRODUCTS);    


    const handleWish = (e: any) => {
        if (e.currentTarget.dataset.wished === "no") {
            return addWish(id);
        }

        return removeWish(id);
    }

    const isWished = () => {
        const productWished = wishedProducts.findIndex((product: any) => product._id === id);

        if (productWished === -1) return false;

        return true;
    }

    const handlePushProduct = (e: any) => {
        if (e.target.tagName === "I") return

        history.push("/product/" + id)
    }

    // <i class="fas fa-heart"></i> favorite
    // <i class="far fa-heart"></i> no favorite

    return (
        <div className="cardProduct" onClick={handlePushProduct}>
            <img src={config.HOST.BACK_END + "/file?folder=products&file=" + img} alt={name}/>

            <div className="cardProduct__info">
                <div className="flex">
                    <h4>{name}</h4>
                    <i className={`${isWished() ? "i__heartComplete fas" : "i__heartBlank far"} fa-heart`} data-wished={isWished() ? "yes" : "no"} onClick={handleWish}></i>
                </div>

                <h5 className="category">{category.join(", ")}</h5>
                <h5 className="price">$ {price}</h5>
                {
                    oldPrice || oldPrice > 0
                    ? <h6 className="oldPrice"><del>$ {oldPrice}</del></h6>
                    : <></>
                }
                
            </div>
            
        </div>
    )
};

export default CardProduct;