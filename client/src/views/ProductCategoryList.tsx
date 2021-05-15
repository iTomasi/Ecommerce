import React, {useContext} from "react";
import {useParams} from "react-router-dom";

// CONTEXT
import {CC_PRODUCTS} from "../context/ContextProducts";

// COMPONENTS
import CardProduct from "../components/CardProduct";

const ProductCategoryList = () => {
    const {category}: any = useParams();

    const {productCategory} = useContext(CC_PRODUCTS);

    return (
        <div className="productList">
            <h1>xd</h1>

            {
                productCategory[category] ?
                <div className="grid__products">
                    {
                        productCategory[category].map((product: any) => (
                            <CardProduct name={product.name} price={product.price} category={product.category} img={product.img} oldPrice={product.oldPrice} />
                        ))
                    }
                </div>

                : <h1>Product {category} not found...</h1>
            }
        </div>
    )
};

export default ProductCategoryList;