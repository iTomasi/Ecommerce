import React, {useEffect, useContext} from "react";
import "./scss/pi_info.scss";

// Context
import {CC_PRODUCTS} from "../../context/ContextProducts";

// Components
import PI_QUANTITY from "./PI_QUANTITY";

interface IPI_INFOProps {
    name: string,
    price: number,
    size: any[];
    description: string
}

const PI_INFO = ({name, price, size, description}: IPI_INFOProps) => {
    const {sizeSelected, setSizeSelected} = useContext(CC_PRODUCTS);

    useEffect(() => {
        if (size[0] !== undefined) {
            setSizeSelected((prev: any) => (
                {
                    ...prev,
                    size: size[0].type,
                    quantity: size[0].quantity
                }
            ))
        }

        // eslint-disable-next-line
    }, [size])

    const handleSizeButton = (e: any) => {
        const getSize = e.currentTarget.dataset.type;
        const getQuantity = e.currentTarget.dataset.quantity;

        console.log(getQuantity)

        setSizeSelected((prev: any) => (
            {
                ...prev,
                size: getSize,
                quantity: parseInt(getQuantity),
                userQuantity: 1
            }
        ))
    }

    return (
        <div className="pi_info">
            <div className="flex">
                <h3>{name}</h3>
                <h3 className="price">$ {price}</h3>
            </div>

            <div className="size">
                <div className="flex">
                    <h3>Size</h3>
                    <h4 className="itemLeft">{sizeSelected.quantity} items left</h4>
                </div>

                <div className="carousel">
                    {size.map((magni: any, index: any) => (
                        index === 0 && sizeSelected.size === "xd"
                        ? <button className="active" onClick={handleSizeButton} type="button" data-quantity={magni.quantity} data-type={magni.type}>{magni.type}</button>
                        : magni.type === sizeSelected.size
                          ? <button className="active" onClick={handleSizeButton} type="button" data-quantity={magni.quantity} data-type={magni.type}>{magni.type}</button>
                          : <button className="noactive" onClick={handleSizeButton} type="button" data-quantity={magni.quantity} data-type={magni.type}>{magni.type}</button>
                    ))}
                </div>
            </div>

            <PI_QUANTITY/>

            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    )
};

export default PI_INFO;