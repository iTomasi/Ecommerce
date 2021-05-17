import React, {useContext} from "react";
import "./scss/pi_quantity.scss";

// CONTEXT
import {CC_PRODUCTS} from "../../context/ContextProducts";

const PI_QUANTITY = () => {

  const {sizeSelected, setSizeSelected} = useContext(CC_PRODUCTS);

  const handlePlusButton = () => {
    if (sizeSelected.userQuantity < sizeSelected.quantity) {
      setSizeSelected((prev: any) => (
        {
          ...prev,
          userQuantity: sizeSelected.userQuantity + 1
        }
      ))
    }
  }

  const handleMinusButton = () => {
    if (sizeSelected.userQuantity > 1) {
      setSizeSelected((prev: any) => (
        {
          ...prev,
          userQuantity: sizeSelected.userQuantity - 1
        }
      ))
    }
  }

  return (
    <div className="pi_quantity">
      <button type="button" onClick={handlePlusButton} className="btnPlus">+</button>
      {sizeSelected.userQuantity}
      <button type="button" onClick={handleMinusButton} className="btnMinus">-</button>
    </div>
  )
}

export default PI_QUANTITY;
