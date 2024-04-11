import { useState } from "react";
import Button from "./Button";
import axiosClient from "src/axios-client";
import useSingleProductStore from "src/Store/useSingleProductStore";
import useUpdateQuantity from "src/Pages/Card/useUpdateQuantity";

export default function QuantityBtn({
    parentClassname,
    decClassName,
    inpClassName,
    incClassName,
    value,
    productID,
}) {
    const [increment, setIncrement] = useState(1);

    // const { isSingleProduct, setSingleProduct } = useSingleProductStore();

    const { updateQuantity, setUpdateQuantity } = useUpdateQuantity();

    // const handleIncrementChange = (event) => {
    //     setIncrement((prevIncrement) => {
    //         const newIncrement = event.target.value;
    //         onQuantityChange(newIncrement);
    //         handleSubmit(newIncrement);
    //         return newIncrement;
    //     });
    // };

    // const onSubtract = (decr) => {
    //     if (decr == 0) {
    //         console.log(decr);
    //     } else {
    //         onQuantityChange(increment - 1);
    //     }
    // };
    const handleSubmit = (quantity) => {
        const payload = {
            id_shop: productID,
            id_user: parseInt(localStorage.getItem("ID")),
            Quantity: parseInt(quantity),
        };
        console.log(payload);
        axiosClient
            .post(`/quantity`, payload)
            .then((response) => {
                // console.log("Quantity updated successfully:", response);
                setUpdateQuantity(payload)

            })
            .catch((error) => {
                console.error(error);
            });
    };
    // console.log(updateQuantity);
    return (
        <div className={parentClassname}>
            <Button
                onClick={() => {
                    // onSubtract(increment);

                    increment == 0
                        ? console.log("Can't Decremented")
                        : setIncrement(increment - 1);
                    handleSubmit(increment - 1);
                    // onQuantityChange(increment - 1);
                    // Notify parent component about quantity change
                    console.log(increment);
                }}
                className={decClassName}
                name="quantity-subtract"
                id="quantity-subtract"
            >
                -
            </Button>
            <input
                className={inpClassName}
                name="quantity"
                id="quantity"
                value={increment}
                // onChange={()=>{setUpdateQuantity(increment)}}
            ></input>
            <Button
                onClick={() => {
                    setIncrement(increment + 1);
                    handleSubmit(increment + 1);
                    // onQuantityChange(increment + 1);
                }}
                className={incClassName}
                name="quantity-add"
                id="quantity-add"
            >
                +
            </Button>
        </div>
    );
}
