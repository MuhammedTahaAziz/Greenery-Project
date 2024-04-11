import { useState } from "react";
import QuantityBtn from "src/Components/QuantityBtn";

export default function CartItem({
    title,
    image,
    price,
    quant,
    pro_id,
    discount,
}) {
    const [quantity, setQuantity] = useState(quant);

    const handleQuantityChange = (value) => {
        setQuantity(value);
    };
    return (
        <div className="w-full h-auto flex justify-center">
            <div className="w-11/12 h-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src={image} className="w-12 h-12 rounded-md" alt="" />
                    <span className="text-sm font-semibold">{title}</span>
                </div>
                <div className="flex items-center gap-4">
                    {discount !== 0 ? (
                        <div className="h-6 text-sm 2xl:text-md flex gap-2">
                            <span className="font-bold line-through">
                                {price}
                            </span>
                            <span className="font-bold text-red-500">
                                {discount}
                            </span>
                        </div>
                    ) : (
                        <span className="h-6 text-sm 2xl:text-lg font-bold">
                            {price}
                        </span>
                    )}
                    <QuantityBtn
                        productID={pro_id}
                        parentClassname="w-24 h-12 flex text-center rounded overflow-hidden border-[1px] border-gray-200"
                        incClassName="w-10 bg-white text-md font-semibold text-center"
                        inpClassName="w-full h-full bg-white text-md font-semibold text-center outline-none border-x-[1px] border-gray-200"
                        decClassName="w-10 bg-white text-md font-semibold text-center"
                        value={quant}
                        onQuantityChange={handleQuantityChange}
                    />
                </div>
            </div>
        </div>
    );
}
