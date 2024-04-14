import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "src/Components/Button";
import { useNavigate } from "react-router-dom";
import useSingleProductStore from "src/Store/useSingleProductStore";
import postData from "./data";
import axiosClient from "src/axios-client";
import DeleteProductImage from "src/Images/Delete-Product.png";
import { useStateContext } from "src/Components/ContextProvider";
import useFavouriteProducts from "src/Store/useFavouriteProducts";

export default function Post({
    key,
    id,
    photo,
    method,
    price,
    title,
    discount,
    state,
    savedd ,
    onClick,
}) {
    // let initial = savedd
    const [saved, setSaveds] = useState(savedd);
    const [xx, setxx] = useState();
    console.log(saved);
    
    useEffect(()=>{
        // console.log(savedd);
        setSaveds(savedd);
    },[savedd]);
    console.log(xx);
    // const { setSaved, setProduct } = useStateContext();
    // console.log(key, photo, method, price, title, discount);

    // console.log(savedd);

    const [favouriteMessage, setFavouriteMessage] = useState("");

    const onHeart = () => {
        console.log();
        const payload = {
            user_id: localStorage.getItem("ID"),
            favorate_id: id,
        };
        console.log(payload);
        axiosClient
            .post("/fav_us_pro_set", payload)
            .then(({ data }) => {
                console.log(data.error);
                data.error == "Added Successfully"
                    ? setFavouriteMessage("Added Successfully")
                    : setFavouriteMessage("Deleted Successfully");
                // setProduct(data);
                // setSaved(data.saved);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const OnBuy = (id) => {
        const payload = {
            user_id: localStorage.getItem("ID"),
            shop_id: id,
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
    // const { isSingleProduct, setSingleProduct } = useSingleProductStore();
    // const { favouriteProducts, setFavouriteProduct } = useFavouriteProducts();

    // const navigate = useNavigate();

    // const getIdProduct = (id) => {
    //     localStorage.setItem("SingleProduct", id);
    // };

    console.log(favouriteMessage);
    return (
        <form
            className="rounded-md w-auto 2xl:w-[15.125rem] h-[17.5rem] 2xl:h-[23rem] flex flex-col items-center gap-3 2xl:gap-[6px] overflow-hidden shadow-md shadow-stone-300 bg-white border-stone-200 border-[1px]"
            method={method}
            onChange={""}
        >
            <Link
                onClick={() => {
                    // setSingleProduct(id);
                    localStorage.setItem("SingleProduct", id);
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
                onClick={() => {
                    localStorage.setItem("SingleProduct", id);
                }}
            >
                {title}
            </Link>

            {discount !== 0 ? (
                <div className="h-6 text-sm 2xl:text-md flex gap-2">
                    <span className="font-bold line-through">{price}</span>
                    <span className="font-bold text-red-500">{discount}</span>
                </div>
            ) : (
                <span className="h-6 text-sm 2xl:text-md font-bold">
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
                        setSaveds((prev)=>!prev);
                        onHeart();
                        onClick && onClick();
                        // savedd=!savedd;

                        // awa klawata bas lo paijy saved
                        // if (window.location.pathname == "/Saved") {
                        //     setFavouriteProduct();
                        //     navigate("/Account");
                        //     setTimeout(() => {
                        //         navigate("/Saved");
                        //     }, 0.1);
                        // }

                        // onFavourite();
                    }}
                    className={` size-8 2xl:size-10 `}
                >
                    <img
                        src={`${
                            // favouriteMessage == "Added Successfully"
                            saved ? "Save-Post.png" : "Unsave-Post.png"
                        }`}
                        className="w-full h-full"
                        alt=""
                    />
                </Button>
            </div>
        </form>
    );
}
// .post("/fav_us_pro_set", payload)
// .then(response => {
//     // Check if response status is OK (200)
//     if (response.status === 200) {
//         return response.json(); // Parse response body as JSON
//     } else {
//         throw new Error('Failed to fetch data');
//     }
// })
// .then(data => {
//     console.log(data);
//     // Check if data contains a message property
//     if ('message' in data) {
//         console.log(data.message);
//         // Handle the message accordingly
//         if (data.message === 'Added successfully.') {
//             // Do something if added successfully
//         } else if (data.message === 'delete successfully') {
//             // Do something if deleted successfully
//         }
//         // You can also handle other cases or messages as needed
//     } else {
//         console.log("Message not found in response.");
//         // Handle the case where message is missing in the response
//     }
//     setProduct(data);
//     setSaved(data.saved);
// })
// .catch(error => {
//     console.error("Error:", error);
//     // Handle error if needed
// });
