import useCardShowStore from "src/Store/useCardShowStore";
import ExpandOrder from "src/Images/Expand.png";
import { useEffect, useState } from "react";
import axiosClient from "src/axios-client";
import Product from "../Product/Product";
import Accordoin from "./Accordoin";

export default function MyOrders() {
    const { setOpen } = useCardShowStore();
    const [isExpand, setExpand] = useState(false);
    const [orders, setOrders] = useState([]);

    const [load, setLoading] = useState(false);
    console.log(isExpand);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const payload = {
            id: parseInt(localStorage.getItem("ID")),
        };
        console.log(payload);
        await axiosClient
            .post("/get_order", payload)
            .then((response) => {
                console.log(response.data);
                console.log(response.data.order.order_id);
                setOrders(response.data.order.order_id);
                setLoading(true);
            })
            .then((error) => {
                setLoading(true);
                console.error(error);
            });
    };

    console.log(orders);

    const newOrders = [];
    let newProductlist = [];
    // console.log(newProductlist);
    orders.forEach((order) => {
        newOrders[order.order_id] = orders;
    });
    // console.log(newOrders);
    for (const key in newOrders) {
        newOrders[key].map((product) => {
            if (product.order_id == key) {
                newProductlist.push(product);
            }
            newOrders[key] = newProductlist;
        });
        newProductlist = [];
    }
    console.log(newOrders);

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
        <div
            className=" w-full h-auto pb-16"
            onClick={() => {
                setOpen(false);
            }}
        >
            <div className="w-5/6 h-full mx-auto pt-32 bg-transparent">
                <p className="text-5xl font-bold">My Orders</p>
                {newOrders.map((order) => (
                    <>
                        <Accordoin order={order} />
                        {/* <div className="w-5/6 mt-10 mx-auto">
                            <div className="w-full h-20 bg-white mx-auto rounded-lg border-2 border-gray-200 flex justify-center items-center gap-40">
                                <div className="flex items-center text-xl font-semibold">
                                    <span className="w-52">
                                        Order ID: {order[0].order_id}
                                    </span>
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
                                                    src={""}
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
                        </div> */}
                    </>
                ))}
            </div>
        </div>
    );
}
