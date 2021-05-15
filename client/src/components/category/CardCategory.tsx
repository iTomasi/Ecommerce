import React from "react";
import {useHistory} from "react-router-dom";
import "./scss/cardCategory.scss";

interface ICardCategoryProps {
    img: string,
    name: string,
    link: string
}

const CardCategory = ({img, name, link}: ICardCategoryProps) => {

    const history = useHistory();

    return (
        <div className="cardCategory" onClick={() => history.push(link)}>
            <img src={"img/category/" + img} alt={name}/>
            <div className="text">
                <h2>{name}</h2>
            </div>
        </div>
    )
};

export default CardCategory