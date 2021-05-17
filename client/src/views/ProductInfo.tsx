import React, {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./scss/productInfo.scss";

// Context
import {CC_PRODUCTS} from "../context/ContextProducts";

// Components
import PI_IMG from "../components/productInfo/PI_IMG";

const ProductInfo = () => {
    const {id}: any = useParams();
    const {filterProduct, products, productInfo} = useContext(CC_PRODUCTS);

    useEffect(() => {
        filterProduct(id);

        console.log(productInfo)
        // eslint-disable-next-line
    }, [products, productInfo])

    return (
        <div className="productInfo">
            <PI_IMG imgs={productInfo.imgs} />
        </div>
    )
};

export default ProductInfo;