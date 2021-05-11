import React from "react";
import "./scss/cardProduct.scss";

interface ICardProduct {
    img: string,
    name: string,
    category: string,
    price: number,
    oldPrice: number

}

const CardProduct = ({img, name, category, price, oldPrice}: ICardProduct) => {
    return (
        <div className="cardProduct">
            <img src={img} alt={name}/>

            <div className="cardProduct__info">
                <div className="flex">
                    <h4>{name}</h4>
                    <i className="i__heartBlank far fa-heart"></i>
                </div>

                <h5 className="category">{category}</h5>
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