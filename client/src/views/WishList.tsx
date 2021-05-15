import React from "react";
import "./scss/wishList.scss";

// Components
import WishCardProduct from "../components/wishlist/WishCardProduct";

const WishList = () => {
    return (
        <div className="wishList">
            <WishCardProduct name="Jean" img="jean_blue.jpg" category={["jeans"]} id="asdljkasd" price={30000}/>
            <WishCardProduct name="Jean" img="jean_blue.jpg" category={["jeans"]} id="asdljkasd" price={30000}/>
            <WishCardProduct name="Jean" img="jean_blue.jpg" category={["jeans"]} id="asdljkasd" price={30000}/>
            <WishCardProduct name="Jean" img="jean_blue.jpg" category={["jeans"]} id="asdljkasd" price={30000}/>
            <WishCardProduct name="Jean" img="jean_blue.jpg" category={["jeans"]} id="asdljkasd" price={30000}/>
        </div>
    )
};

export default WishList;