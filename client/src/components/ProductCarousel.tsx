import React from "react";
import "./scss/productCarousel.scss";

interface IProductCarouselProps {
    title: string,
    children: any
}

const ProductCarousel = ({title, children}: IProductCarouselProps) => {
    return (
        <div className="productCarousel">
            <div className="title">
                <h3>{title}</h3>
                <h3 className="see_all">See all</h3>
            </div>

            <div className="carousel">{
                children
            }</div>
        </div>
    )
};

export default ProductCarousel