import React from "react";
import "./scss/cardCategory.scss";

interface ICardCategoryProps {
    img: string,
    name: string
}

const CardCategory = ({img, name}: ICardCategoryProps) => {
    return (
        <div className="cardCategory">
            <img src={"img/category/" + img} alt={name}/>
            <div className="text">
                <h2>{name}</h2>
            </div>
        </div>
    )
};

export default CardCategory