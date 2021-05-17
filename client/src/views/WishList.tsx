import React, {useContext} from "react";
import "./scss/wishList.scss";

// Context
import {CC_PRODUCTS} from "../context/ContextProducts";

// Components
import WishCardProduct from "../components/wishlist/WishCardProduct";

const WishList = () => {

    const {wishedProducts} = useContext(CC_PRODUCTS);

    return (
        <div className="wishList">
            {
                wishedProducts.map((wished: any) => (
                    <WishCardProduct id={wished._id} name={wished.name} img={wished.imgs[0]} category={wished.category} price={wished.price}/>
                ))
            }
        </div>
    )
};

export default WishList;