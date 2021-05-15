import React, {createContext, useState} from "react";
import config from "../config/config";
import Axios from "axios";

const CC_PRODUCTS: any = createContext(null);

const ContextProducts = ({children}: any) => {
    const [products, setProducts] = useState<any[]>([]);
    const [productCategory, setProductCategory] = useState<any>({
        t_shirt: [],
        jeans: [],
        shoes: []
    });

    const getProducts = async () => {
        const res = await Axios.get(config.HOST.BACK_END + "/products");

        const t_shirt: any = [];
        const jeans: any = [];
        const shoes: any = [];

        for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].category.includes("tshirt")) {
                t_shirt.push(res.data[i]);
            }

            if (res.data[i].category.includes("jeans")) {
                jeans.push(res.data[i])
            }

            if (res.data[i].category.includes("shoes")) {
                shoes.push(res.data[i])
            }
        }

        setProducts(res.data);
        setProductCategory((prev: any) => ({...prev, t_shirt, jeans, shoes}));
    };

    return (
        <CC_PRODUCTS.Provider value={{
            products, productCategory, getProducts
        }}>
            {children}
        </CC_PRODUCTS.Provider>
    )
};

export {CC_PRODUCTS, ContextProducts}