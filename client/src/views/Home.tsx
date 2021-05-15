import React, {useContext} from "react";


// Context
import {CC_PRODUCTS} from "../context/ContextProducts";

// Components
import CardProduct from "../components/CardProduct";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {

    const {productCategory} = useContext(CC_PRODUCTS);

    return (
        <>
        <h1>Home</h1>
        <ProductCarousel title="New in shoes">
            {
                productCategory.shoes.map((shoes: any) => (
                    <CardProduct id={shoes._id} name={shoes.name} category={shoes.category} price={shoes.price} oldPrice={shoes.oldPrice} img={shoes.img} />
                ))
            }

        </ProductCarousel>

        <ProductCarousel title="New in Jeans">
            {
                productCategory.jeans.map((jean: any) => (
                    <CardProduct id={jean._id} name={jean.name} category={jean.category} price={jean.price} oldPrice={jean.oldPrice} img={jean.img}/>
                ))
            }

        </ProductCarousel>

        <ProductCarousel title="New in T-shirt">
            {
                productCategory.t_shirt.map((tshirt: any) => (
                    <CardProduct id={tshirt._id} name={tshirt.name} category={tshirt.category} price={tshirt.price} oldPrice={tshirt.oldPrice} img={tshirt.img}/>
                ))
            }

        </ProductCarousel>
        </>
    )
};

export default Home;