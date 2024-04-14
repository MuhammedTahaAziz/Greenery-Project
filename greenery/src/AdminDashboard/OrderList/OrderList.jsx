import useCardShowStore from "src/Store/useCardShowStore";
import ExpandOrder from "src/Images/Expand.png";
import { useEffect, useState } from "react";
import axiosClient from "src/axios-client";
import Accordoin from "./Accordoin";

export default function OrderList() {
    const { setOpen } = useCardShowStore();
    const [isExpand, setExpand] = useState(false);
    const [orders, setOrders] = useState([]);

    const [load, setLoading] = useState(false);
    console.log(isExpand);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // const payload = {
        //     id: parseInt(localStorage.getItem("ID")),
        // };
        // console.log(payload);
        await axiosClient
            .get("/Getshop")
            .then((response) => {
                console.log(response.data);
                console.log(response.data.shop);
                setOrders(response.data.shop);
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
    // console.log(newOrders);

    const getProductsTotal = (products) => {
        let total = 0;
        products.map((product) => {
            Number(product.Discound) !== 0
                ? (total =
                      total + Number(product.Discound) * Number(product.Quantity))
                : (total = total + Number(product.price) * Number(product.Quantity));
        });
        return total;
    };

    return (
        <div
            className="w-4/5 h-auto absolute right-0  pb-16"
            onClick={() => {
                setOpen(false);
            }}
        >
            <div className="w-10/12 h-full mx-auto pt-7 pt bg-transparent">
                <p className="text-5xl font-bold">Users Order List</p>
                {newOrders.map((order) => (
                    <>
                    <Accordoin order={order}/>
                    {/* <div className="w-full mt-10 mx-auto">
                        <div className="w-full h-20 bg-white mx-auto rounded-lg border-2 border-gray-200 flex justify-center items-center gap-20">
                            <div className="flex items-center text-xl font-semibold">
                                <span className="w-36">
                                    Order: {order[0].order_id}
                                </span>
                                <span className="w-20">
                                    User: {order[0].id_user}
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
                                <div className="w-full h-20 bg-white mx-auto flex justify-center items-center gap-10">
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
                                            Quantity:{` ${product.Quantity}`}
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
