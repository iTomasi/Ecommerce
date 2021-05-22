import React, {useEffect, useContext} from "react";
import code_numbers from "../../config/code_numbers.json";
import "../../views/scss/form.scss";

// Context

import {CC_ORDER} from "../../context/ContextOrder";
import {CC_USER} from "../../context/ContextUser";

interface IOrderDeliveryFormProps {
    displayNum: number
}

const OrderDeliveryForm = ({displayNum}: IOrderDeliveryFormProps) => {

    const {orderAddress, setOrderAddress, handleOrderState} = useContext(CC_ORDER);
    const {userDatas} = useContext(CC_USER);

    useEffect(() => {
        setOrderAddress(userDatas.token);
        // eslint-disable-next-line
    }, [userDatas])

    const handleInputChange = (e: any) => {
        setOrderAddress((prev: any) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleDeliveryForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(orderAddress);
        handleOrderState(1);
    }

    return (
        <form className="iw_form" style={{display: displayNum === 1 ? "block" : "none"}} onSubmit={handleDeliveryForm}>
            <div className="formSection">
                <label className="labelTitle">First Name</label>
                <input type="text" className="input" placeholder="First Name" name="first_name" value={orderAddress.first_name} onChange={handleInputChange}/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Last Name</label>
                <input type="text" className="input" placeholder="Last Name" name="last_name" value={orderAddress.last_name} onChange={handleInputChange}/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Country</label>
                <select name="country" onChange={handleInputChange} className="input">
                    {
                        code_numbers.map((country: any) => (
                            orderAddress.country === country.name
                            ? <option value={country.name} selected>{country.name}</option>
                            : <option value={country.name}>{country.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="formSection">
                <label className="labelTitle">Address</label>
                <input type="text" className="input" placeholder="Address" name="address" value={orderAddress.address} onChange={handleInputChange}/>
            </div>

            <div className="formSection">
                <label className="labelTitle">State / Province</label>
                <input type="text" className="input" placeholder="State / Province" name="province" value={orderAddress.province} onChange={handleInputChange}/>
            </div>

            <div className="formSection">
                <label className="labelTitle">City / district</label>
                <input type="text" className="input" placeholder="City / district" name="city" value={orderAddress.city} onChange={handleInputChange}/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Postal Code</label>
                <input type="text" className="input" placeholder="Postal Code" name="postal_code" value={orderAddress.postal_code} onChange={handleInputChange}/>
            </div>

            <div className="formSection">
                <label className="labelTitle">Phone Number</label>

                <div className="inputNumber">
                    <select name="phone_code" onChange={handleInputChange}>
                        {
                            code_numbers.map((code: any) => (
                                code.code === orderAddress.phone_code
                                ? <option value={code.code} selected>{code.name} ({code.code})</option>
                                : <option value={code.code}>{code.name} ({code.code})</option>
                            ))
                        }

                    </select>

                    <input type="text" placeholder="Phone Number" name="phone_number" value={orderAddress.phone_number} onChange={handleInputChange}/>
                </div>
            </div>

            <button type="submit">SAVE</button>
        </form>
    )
};

export default OrderDeliveryForm;