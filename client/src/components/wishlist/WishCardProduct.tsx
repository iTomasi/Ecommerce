import React from "react";
import config from "../../config/config";
import "./scss/wishCardProduct.scss";

interface IWishCardProductProps {
    id: string
    img: string,
    name: string,
    category: string[],
    price: number
}

const WishCardProduct = ({id, img, name, category, price}: IWishCardProductProps) => {
    return (
        <div className="wishCardProduct" data-id={id}>
            <img src={config.HOST.BACK_END + "/file?folder=products&file=" + img} alt={name}/>

            <div className="right">
                <div className="title">
                    <h3 className="name">{name}</h3>
                    <i className="i__trash fas fa-trash"></i>
                </div>

                <h4 className="category">{category.join(", ")}</h4>

                <h3 className="price">${price.toFixed(2)}</h3>

                <button type="button">ADD TO BAG</button>
            </div>
        </div>
    )
};

export default WishCardProduct;