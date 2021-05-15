import React from "react";
import category from "../config/category.json";
import "./scss/category.scss";

// Components
import CardCategory from "../components/category/CardCategory";

const Category = () => {
    return (
        <div className="grid__category">
            {
                category.map((cate: any, index: any) => (
                    <CardCategory key={index} name={cate.name} img={cate.img} link={cate.link} />
                ))
            }
        </div>
    )
};

export default Category;