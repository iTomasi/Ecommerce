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
    const {filterProduct, products, productInfo, sizeSelected, addBag} = useContext(CC_PRODUCTS);

    useEffect(() => {
        filterProduct(id);

        // eslint-disable-next-line
    }, [products, productInfo])

    const handleBuyButton = () => {
        addBag(id, sizeSelected.userQuantity, sizeSelected.size);
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