import { useState, useEffect } from "react";
import QuantityBtn from "src/Components/QuantityBtn";
import Button from "src/Components/Button";
import postData from "src/Forms/Post/data";
import useSingleProductStore from "src/Store/useSingleProductStore";
import axiosClient from "src/axios-client";
import useCardShowStore from "src/Store/useCardShowStore";

export default function SingleProduct() {
    const { isSingleProduct, setSingleProduct } = useSingleProductStore();
    console.log(isSingleProduct);
    const [posts, setPosts] = useState([]);
    const [saved, setSaved] = useState(false);
    const { isOpen, setOpen } = useCardShowStore();
    const [singleProducts, setSingleProducts] = useState({});

    // useEffect(() => {
    //   // Fetch the product data for the specified productId
    //   const fetchProductData = async () => {
    //     try {
    //       const response = await axios.get(
    //         `https://jsonplaceholder.typicode.com/users/${isSingleProduct}`
    //       ).then((response)=>{

    //         setProductData(response.data);
    //         setTitleValue(response.data.name)
    //         setDescriptionValue(response.data.phone)
    //         setCategoryValue(response.data.street)
    //         setSeasonValue(response.data.phone)
    //         setPriceValue(response.data.phone)
    //         setDiscountValue(response.data.phone)
    //         setQuantityValue(response.data.phone)
    //         setPhotoValue()
    //         console.log("productData: " + productData.name);

    //       });
    //       // console.log("aaa");

    //       console.log(response.data);
    //     } catch (error) {
    //       console.error("Error fetching product data:", error);
    //     }
    //   };

    //   fetchProductData();
    // }, [productData.id]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            axiosClient
                .get(`/producted/${localStorage.getItem('SingleProduct')}`)
                .then(({ data }) => {
                    console.log(data);
                    setSingleProducts(data.singleProduct[0]);
                    console.log(localStorage.getItem('userID'));
                    console.log(localStorage.getItem('SingleProduct'));
                })
                .then((error) => {
                    console.error(error)
                });
        } catch (error) {
            console.error(error.message)
        }
    };

    const OnBuy = () => {
        const payload = {
            user_id: localStorage.getItem("ID"),
            shop_id: localStorage.getItem('SingleProduct'),
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

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <form
            id="reviewProduct"
            name="reviewProduct"
            className="w-5/6 mx-auto mt-[7.5rem] scrollbar-hide bg-inherit mb-12 rever"
            method=""
            onClick={() => {
                setOpen(false);
            }}
        >
            <div className="flex justify-between">
                <div className="w-[31rem] h-[30rem] relative overflow-hidden rounded-lg">
                    <img
                        className="w-[100%] h-[100%]"
                        src={
                            "http://127.0.0.1:8000/products/" +
                            singleProducts.image
                        }
                        alt="Post Img"
                    />
                </div>
                <div className="w-2/4 h-[28rem] flex flex-col justify-between">
                    <div className="flex flex-col gap-8">
                        <span
                            className="text-5xl font-semibold"
                            name="item-title"
                            id="item-title"
                        >
                            {singleProducts.name}
                        </span>
                        <p
                            name="item-discription"
                            id="item-discription"
                            className="w-full text-justify"
                        >
                            {singleProducts.title}
                        </p>
                    </div>
                    <div className="flex flex-col justify-between h-52 -mb-7">
                        <div className="h-[8rem] flex flex-col justify-around gap-4">
                            <span
                                className="text-4xl tracking-tight h-8"
                                name="item-category"
                                id="item-category"
                            >
                                CATEGORY | {singleProducts.category_name}
                            </span>
                            <span
                                className={`text-4xl h-8 tracking-tight ${singleProducts.category_name=="gift"?"text-white":""}`}
                                name="item-season"
                                id="item-season"
                            >
                                SEASON | {singleProducts.filter_name}
                            </span>
                            <span
                                className="text-2xl tracking-tight h-8"
                                name="item-price"
                                id="item-price"
                            >
                                {singleProducts.Discound != 0 ? (
                                    <div className="flex gap-2">
                                        <span className="font-bold line-through">
                                            {singleProducts.price}
                                        </span>
                                        <span className="font-bold text-red-500">
                                            {singleProducts.Discound}
                                        </span>
                                    </div>
                                ) : (
                                    <span className="font-bold">
                                        {singleProducts.price}
                                    </span>
                                )}
                            </span>
                        </div>
                        <div className="flex justify-between -mb-2">
                            <Button
                                className="w-full h-14 -translate-y-[0.25rem] bg-[#087516] text-white text-2xl font-bold rounded"
                                onClick={() => {
                                    OnBuy();
                                }}
                            >
                                Add To Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
