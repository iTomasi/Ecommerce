import React, {useEffect, useState} from "react";
import "./scss/pi_info.scss";

interface IPI_INFOProps {
    name: string,
    price: number,
    size: any[];
    description: string
}

const PI_INFO = ({name, price, size, description}: IPI_INFOProps) => {

    useEffect(() => {
        console.log("11")
        if (size[0] !== undefined) {
            setSizeSelected((prev: any) => (
                {
                    ...prev,
                    size: size[0].type,
                    quantity: size[0].quantity
                }
            ))
        }
    }, [size])

    const [sizeSelected, setSizeSelected] = useState<any>({
        defaultValue: true,
        size: "xd",
        quantity: 0,
    })

    const handleSizeButton = (e: any) => {
        const getSize = e.currentTarget.dataset.type;
        const getQuantity = e.currentTarget.dataset.quantity;

        console.log(getQuantity)

        setSizeSelected((prev: any) => (
            {
                ...prev,
                size: getSize,
                quantity: parseInt(getQuantity)
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

            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    )
};

export default PI_INFO;