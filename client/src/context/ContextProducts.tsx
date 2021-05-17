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
    const [productInfo, setProductInfo] = useState<any>({
        _id: "",
        name: "",
        category: [],
        price: 0,
        oldPrice: 0,
        imgs: [],
        description: "",
        size: []

    });

    const [wishedProducts, setWishedProducts] = useState<any[]>(JSON.parse(localStorage.getItem("wished") || "[]"));

    const getProducts = async () => {
        const res = await Axios.get(config.HOST.BACK_END + "/products");
        console.log(res.data);

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

    const filterProduct = (id: string) => {
        const filtingProduct = products.filter((product: any) => product._id === id);

        if (filtingProduct[0] === undefined) return;

        setProductInfo(filtingProduct[0]);
    }

    const addWish = (id: string) => {

        const getProduct = products.filter((product: any) => product._id === id);


        if (getProduct[0] === undefined) return false;
        else if (wishedProducts.findIndex((wished: any) => wished._id === id) !== -1) return false;

        const getWishedList = [...wishedProducts];
        getWishedList.push(getProduct[0]);

        localStorage.setItem("wished", JSON.stringify(getWishedList));
        setWishedProducts(getWishedList);
    }

    const removeWish = (id: string) => {
        const getProduct = products.filter((product: any) => product._id === id);

        if (getProduct[0] === undefined) return false;
        else if (wishedProducts.findIndex((wished: any) => wished._id === id) === -1) return false;

        const getWishedList = [...wishedProducts];

        const filtingWishList = getWishedList.filter((wished: any) => wished._id !== id);

        localStorage.setItem("wished", JSON.stringify(filtingWishList));
        setWishedProducts(filtingWishList);
    }

    return (
        <CC_PRODUCTS.Provider value={{
            products, productCategory, getProducts, wishedProducts, addWish, removeWish, filterProduct, productInfo
        }}>
            {children}
        </CC_PRODUCTS.Provider>
    )
};

export {CC_PRODUCTS, ContextProducts}