import ExpandOrder from "src/Images/Expand.png";
import { useEffect, useState } from "react";
export default function Accordoin({ order }) {
    const [isExpand, setExpand] = useState(false);
    const getProductsTotal = (products) => {
        let total = 0;
        products.map((product) => {
            Number(product.Discound) !== 0
                ? (total =
                      total +
                      Number(product.Discound) * Number(product.Quantity))
                : (total =
                      total + Number(product.price) * Number(product.Quantity));
        });
        return total;
    };
    return (
        <div className="w-5/6 mt-5 mx-auto">
            <div className="w-full h-20 bg-white mx-auto rounded-lg border-2 border-gray-200 flex justify-center items-center gap-40">
                <div className="flex items-center text-xl font-semibold">
                    <span className="w-52">Order ID: {order[0].order_id}</span>
                    <span className="w-80 translate-x-24">
                        Date: {` ${order[0].dateTimeCreate}`}
                    </span>
                </div>
                <div className="flex items-center ">
                    <span className="w-60 text-xl font-semibold">
                        Total:{getProductsTotal(order)}
                    </span>
                    <img
                        src={ExpandOrder}
                        className="w-12 h-12 cursor-pointer"
                        alt=""
                        onClick={() => {
                            setExpand(!isExpand);
                        }}
                    />
                </div>
            </div>

            {order.map((product) => (
                <div
                    className={`w-full flex flex-col gap-2 mt-1 bg-white overflow-hidden rounded-md border-[1px] ${
                        isExpand
                            ? "h-auto duration-300"
                            : "h-0 border-none duration-300"
                    }`}
                >
                    <div className="w-full h-20 bg-white mx-auto flex justify-center items-center gap-20">
                        <div className="flex items-center text-xl font-semibold">
                            <span className="w-32 flex items-center">
                                Image:{` `}
                                <img
                                    src={"http://127.0.0.1:8000/products/" + product.image}
                                    className="size-14 rounded"
                                    alt=""
                                />
                            </span>
                            <span className="w-80 translate-x-24">
                                Name: {product.name}
                            </span>
                        </div>
                        <div className="flex items-center ">
                            <span className="w-60 text-xl font-semibold flex items-center ">
                                Price:{" "}
                                {product.Discound !== 0 ? (
                                    <div className="h-6 flex gap-2">
                                        <span className="font-bold line-through">
                                            {product.price}
                                        </span>
                                        <span className="font-bold text-red-500">
                                            {product.Discound}
                                        </span>
                                    </div>
                                ) : (
                                    <span className="h-6 font-bold">
                                        {product.price}
                                    </span>
                                )}
                            </span>
                            <span className="w-40 text-xl font-semibold">
                                Quantity:
                                {` ${product.Quantity}`}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
