import React, {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./scss/productInfo.scss";

// Context
import {CC_PRODUCTS} from "../context/ContextProducts";

// Components
import PI_IMG from "../components/productInfo/PI_IMG";
import PI_INFO from "../components/productInfo/PI_INFO";
import PI_BUY from "../components/productInfo/PI_BUY";

const ProductInfo = () => {
    const {id}: any = useParams();
    const {filterProduct, products, productInfo} = useContext(CC_PRODUCTS);

    useEffect(() => {
        filterProduct(id);

        console.log(productInfo)
        // eslint-disable-next-line
    }, [products, productInfo])

    const handleBuyButton = () => {
        console.log("buy btn!")
    }

    return (
        <div className="productInfo">
            <PI_IMG imgs={productInfo.imgs} />
            <PI_INFO name={productInfo.name} price={productInfo.price} size={productInfo.size} description={productInfo.description}/>
            <hr/>
            <PI_BUY onClick={handleBuyButton}/>
        </div>
    )
};

export default ProductInfo;