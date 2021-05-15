import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import "./scss/productList.scss";

// CONTEXT
import {CC_PRODUCTS} from "../context/ContextProducts";

// COMPONENTS
import CardProduct from "../components/CardProduct";

const ProductCategoryList = () => {
    const {category}: any = useParams();

    const {productCategory} = useContext(CC_PRODUCTS);

    const categoryTitle = () => {

        if (!productCategory[category]) return false

        const categoryKeys = Object.keys(productCategory);

        const getCategory = categoryKeys.filter((cate: any) => cate === category);

        return getCategory[0].replace(/_/g, "-");
    }

    return (
        <div className="productList">
            <h1>
                {
                    categoryTitle()
                    ? categoryTitle() + " " + `(${productCategory[category].length})`
                    : "No exist"
                }
            </h1>

            {
                productCategory[category] ?
                <div className="grid__products">
                    {
                        productCategory[category].map((product: any) => (
                            <CardProduct id={product._id} name={product.name} price={product.price} category={product.category} img={product.img} oldPrice={product.oldPrice} />
                        ))
                    }
                </div>

                : <></>
            }
        </div>
    )
};

export default ProductCategoryList;