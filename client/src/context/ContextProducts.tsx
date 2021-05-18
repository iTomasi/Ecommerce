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

    const [sizeSelected, setSizeSelected] = useState<any>({size: "xd", quantity: 0, userQuantity: 1})

    const [wishedProducts, setWishedProducts] = useState<any[]>(JSON.parse(localStorage.getItem("wished") || "[]"));
    const [bagProducts, setBagProducts] = useState<any[]>(JSON.parse(localStorage.getItem("bag") || "[]"));

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

    const addBag = (id: string, quantity: number, size: string, storageQuantity: number) => {
        const getProduct = products.filter((product: any) => product._id === id);

        if (getProduct[0] === undefined) return false;

        const getSize = getProduct[0].size.filter((type: any) => type.type === size);

        if (getSize[0] === undefined) return false;

        else if (getSize[0].quantity < quantity) return false;

        const copyBag = [...bagProducts];
        const indexProductBag = copyBag.findIndex((product: any) => product.id === id);

        if (indexProductBag === -1) {
            copyBag.push({
                id: getProduct[0]._id,
                name: getProduct[0].name,
                category: getProduct[0].category,
                price: getProduct[0].price,
                oldPrice: getProduct[0].oldPrice,
                img: getProduct[0].imgs[0],
                sizes: [{size, quantity, storageQuantity}]
            });

            localStorage.setItem("bag", JSON.stringify(copyBag));
            setBagProducts(copyBag);
            return true
        }

        const getBagSizes = copyBag[indexProductBag].sizes;

        const indexBagSizes = getBagSizes.findIndex((productSize: any) => productSize.size === size);

        if (indexBagSizes === -1) {
            getBagSizes.push({
                size, quantity, storageQuantity
            });
            localStorage.setItem("bag", JSON.stringify(copyBag))
            setBagProducts(copyBag);
            return true;
        }

        getBagSizes[indexBagSizes].quantity += quantity;
        localStorage.setItem("bag", JSON.stringify(copyBag));
        setBagProducts(copyBag);
        return true   
        
    }

    const editBagQuantity = (id: string, sizeType: string, quantity: number) => {
        const copyBag = [...bagProducts];

        const indexProductBag = copyBag.findIndex((product: any) => product.id === id);

        const getSizes = copyBag[indexProductBag].sizes;
        const indexSizeBag = getSizes.findIndex((size: any) => size.size === sizeType);

        getSizes[indexSizeBag].quantity = quantity;

        localStorage.setItem("bag", JSON.stringify(copyBag));
        setBagProducts(copyBag);
    }

    const removeBagSize = (id: string, size: string) => {
        const copyBag = [...bagProducts];

        const indexProductBag = copyBag.findIndex((product: any) => product.id === id);
        const getSizes = copyBag[indexProductBag].sizes;
        const filtingSizes = getSizes.filter((productSize: any) => productSize.size !== size);

        copyBag[indexProductBag].sizes = filtingSizes;

        localStorage.setItem("bag", JSON.stringify(copyBag));
        setBagProducts(copyBag);
    }


    return (
        <CC_PRODUCTS.Provider value={{
            products, productCategory, getProducts, wishedProducts, addWish, removeWish, filterProduct, productInfo, sizeSelected, setSizeSelected, bagProducts, addBag, editBagQuantity, removeBagSize
        }}>
            {children}
        </CC_PRODUCTS.Provider>
    )
};

export {CC_PRODUCTS, ContextProducts}