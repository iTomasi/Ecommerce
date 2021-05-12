import React from "react";
import "./scss/category.scss";

// Components
import CardCategory from "../components/category/CardCategory";

const Category = () => {
    return (
        <div className="grid__category">
            <CardCategory name="Jeans" img="jeans.jpg"/>
            <CardCategory name="Jeans" img="jeans.jpg"/>
            <CardCategory name="Jeans" img="jeans.jpg"/>
        </div>
    )
};

export default Category;