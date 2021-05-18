import React, {useContext} from "react";
import config from "../../config/config";
import "./scss/bagCardProduct.scss";

// Context
import {CC_PRODUCTS} from "../../context/ContextProducts";

interface IBagCardProductsProps {
    id: string,
    img: string,
    name: string,
    category: string[],
    price: number,
    sizes: any[]
}

const BagCardProduct = ({id, img, name, category, price, sizes}: IBagCardProductsProps) => {
    const {editBagQuantity, removeBagSize} = useContext(CC_PRODUCTS);

    const selectQuantity = (userSelected: number, storage: number) => {
        const option: any = [];

        for (let i = 0; i < storage; i++) {
            if (userSelected !== (i + 1)) {
                option.push(<option value={i + 1}>{i + 1}</option>);
            }

            else {
                option.push(<option selected value={i + 1}>{i + 1}</option>)
            }
        }

        return option
    }

    const totalQuantity = () => {
        let count: number = 0;

        for (let i = 0; i < sizes.length; i++) {
            count += sizes[i].quantity;
        }

        return count
    }

    const handleChangeQuantity = (e: any) => {
        const getSize = e.currentTarget.dataset.size;
        const quantity = parseInt(e.currentTarget.value);

        editBagQuantity(id, getSize, quantity)
    }

    const handleRemoveSize = (e: any) => {
        removeBagSize(id, e.currentTarget.dataset.size)
    }

    return (
        <div className="bagCardProduct">
            <img src={config.HOST.BACK_END + "/file?folder=products&file=" + img} alt={name}/>

            <div className="info">
                <div className="flex">
                    <h3 className="name">{name}</h3>
                    <h3 className="price">${price * totalQuantity()}</h3>
                </div>

                <div className="flex">
                    <h3 className="category">{category.join(", ")}</h3>
                    <h3 className="oldPrice">${price}</h3>
                </div>

                {
                    sizes.map((size: any) => (
                        <div className="size_quantity">
                            <div className="left">
                                <div className="size">
                                    <h4>Size</h4>
                                    <h5>{size.size}</h5>
                                </div>

                                <div className="quantity">
                                    <h4>Quantity</h4>
                                    <select onChange={handleChangeQuantity} data-size={size.size}>
                                        {
                                            selectQuantity(size.quantity, size.storageQuantity)
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="right">
                                <i className="i__trash fas fa-trash" data-size={size.size} onClick={handleRemoveSize}></i>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        
        
    )
};

export default BagCardProduct;