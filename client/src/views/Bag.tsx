import React, {useContext} from "react";

// CONTEXT
import {CC_PRODUCTS} from "../context/ContextProducts";

// Components
import BagCardProduct from "../components/bag/BagCardProduct";
import Checkout from "../components/bag/Checkout";

const Bag = () => {

    const {bagProducts} = useContext(CC_PRODUCTS); 

    return (
        <div className="bag">
            {
                bagProducts.map((product: any) => (
                    <BagCardProduct key={product.id} id={product.id} name={product.name} price={product.price} category={product.category} img={product.img} sizes={product.sizes} />
                ))
            }
            <Checkout/>
        </div>
    )
};

export default Bag;