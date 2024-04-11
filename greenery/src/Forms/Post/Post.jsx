import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "src/Components/Button";
import useSingleProductStore from "src/Store/useSingleProductStore";
import postData from "./data";
import axiosClient from "src/axios-client";
import DeleteProductImage from "src/Images/Delete-Product.png";
import { useStateContext } from "src/Components/ContextProvider";

export default function Post({
    key,
    id,
    photo,
    method,
    price,
    title,
    discount,
    state,
}) {
    const { setSaved, setProduct } = useStateContext();
    console.log(key, photo, method, price, title, discount);
    console.log(localStorage.getItem(""));

    const onHeart = () => {
        console.log();
        const payload = {
            user_id: localStorage.getItem("ID"),
            favorate_id: id,
            quantity: 1,
        };
        console.log(payload);
        axiosClient
            .post("/fav_us_pro_set", payload)
            .then(({ data }) => {
                console.log(data);
                console.log(data.products);
                setProduct(data.products);
                setSaved(data.saved);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const OnBuy = (id) => {
        const payload = {
            user_id: localStorage.getItem("ID"),
            shop_id: id,
            quantity: 1,
        };
        console.log(payload);
        axiosClient
            .post("/shop_us_pro_set", payload)
            .then(({ data }) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const { isSingleProduct, setSingleProduct } = useSingleProductStore();

    const [saved, setSaveds] = useState(state);
    return (
        <form
            className="rounded-md w-auto 2xl:w-[15.125rem] h-[17.5rem] 2xl:h-[23rem] flex flex-col items-center gap-3 2xl:gap-[6px] overflow-hidden shadow-md shadow-stone-300 bg-white border-stone-200 border-[1px]"
            method={method}
            onChange={""}
        >
            <Link
                onClick={() => {
                    setSingleProduct(id);
                }}
                to={"/SingleProduct"}
                className="h-[52.5%] w-[90%] 2xl:h-[58%] 2xl:w-[90%] mt-2 2xl:mt-3"
            >
                <img
                    className="w-[100%] h-[100%] rounded"
                    src={`${photo}`}
                    alt="Post Img"
                />
            </Link>
            <Link
                to={"/SingleProduct"}
                className="h-8 text-sm 2xl:text-md font-bold"
            >
                {title}
            </Link>

            {discount !== 0 ? (
                <div className="h-6 text-sm 2xl:text-md flex gap-2">
                    <span className="font-bold line-through">{price}</span>
                    <span className="font-bold text-red-500">{discount}</span>
                </div>
            ) : (
                <span className="h-6 text-sm 2xl:text-lg font-bold">
                    {price}
                </span>
            )}

            <div className="w-5/6 flex justify-between items-center mt-1 2xl:mt-3">
                <Button
                    onClick={() => {
                        OnBuy(id);
                    }}
                    className="size-8 2xl:size-10"
                >
                    <img src="Add-Order.png" className="w-full h-full" alt="" />
                </Button>
                <Button
                    onClick={() => {
                        setSaveds(!saved);
                        onHeart();
                    }}
                    className={` size-8 2xl:size-10 `}
                >
                    <img
                        src={`${saved ? "Save-Post.png" : "Unsave-Post.png"}`}
                        className="w-full h-full"
                        alt=""
                    />
                </Button>
            </div>
        </form>
    );
}
