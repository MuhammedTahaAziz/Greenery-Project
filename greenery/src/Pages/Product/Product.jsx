import React, { useState, useEffect } from "react";
// import postData from "src/Forms/Post/data";
import ProductNav from "src/Pages/Product/ProductNav";
import Post from "src/Forms/Post/Post";
import useSeasonCategory from "src/Store/useSeasonCategory";
import useDiscount from "src/Store/useDiscount";
import useProductCategory from "src/Store/useProductCategory";
import axiosClient from "src/axios-client";
import { useStateContext } from "src/Components/ContextProvider";
import useCardShowStore from "src/Store/useCardShowStore";

function postReturn(post, isProductCategory, isSeasonCategory, isDiscount) {
    // const onHeart = (id) => {
    //   console.log();
    //     const payload = {
    //         user_id: localStorage.getItem("ID"),
    //         favorate_id: id,
    //     };
    //     console.log(payload);
    //     axiosClient
    //         .post("/fav_us_pro_set", payload)
    //         .then(({data}) => {
    //             console.log(data);
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

    if (isProductCategory === post.category_name) {
        if (isSeasonCategory === "all" && isDiscount === false) {
            return (
                <Post
                    key={+post.id}
                    id={post.id}
                    photo={"http://127.0.0.1:8000/products/" + post.image}
                    title={post.name}
                    price={post.price}
                    discount={post.Discound}
                    state={post.is_favorited}
                ></Post>
            );
        }
        if (isDiscount == true && post.Discound !== 0) {
            return (
                <Post
                    key={+post.id}
                    id={post.id}
                    photo={"http://127.0.0.1:8000/products/" + post.image}
                    title={post.name}
                    price={post.price}
                    discount={post.Discound}
                    state={post.is_favorited}
                ></Post>
            );
        }
        if (isSeasonCategory == post.filter_name) {
            return (
                <Post
                    key={+post.id}
                    id={post.id}
                    photo={"http://127.0.0.1:8000/products/" + post.image}
                    title={post.name}
                    price={post.price}
                    discount={post.Discound}
                    state={post.is_favorited}
                ></Post>
            );
        }
    }

    return "";
}

export default function Product() {
    const [dataFetched, setDataFetched] = useState(false);
    // const [posts, setPosts] = useState([]);
    const { products, setProduct } = useStateContext();
    const [load, setLoading] = useState(false);
    const { isSeasonCategory } = useSeasonCategory();
    const { isDiscount } = useDiscount();
    const { isProductCategory } = useProductCategory();

    const { isOpen , setOpen } = useCardShowStore();

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const payload = {
            userID: parseInt(localStorage.getItem("ID")),
        };
        try {
            console.log(payload);
            axiosClient
                .post("/productFavourite", payload)
                .then(({ data }) => {
                    setProduct(data.products);
                    console.log(data.products);
                    setDataFetched(true);
                    setLoading(false);
                })
                .then((error) => {
                    // setLoading(false);
                    // console.error(error)
                });
        } catch (error) {
            // setLoading(false);
            // setLoading(false);
        }
    };

    // console.log(posts);

    return (
        <div
            className="w-5/6 h-full mx-auto bg-transparent"
            onClick={() => {
                setOpen(false)
            }}
        >
            <ProductNav></ProductNav>
            <div className="grid grid-cols-5 gap-4 mt-10 mb-12">
                {load && (
                    <div>
                        <tr>
                            <td colSpan="5" className="text-center">
                                Loading
                            </td>
                        </tr>
                    </div>
                )}
                {products.map((post) =>
                    postReturn(
                        post,
                        isProductCategory,
                        isSeasonCategory,
                        isDiscount
                    )
                )}
            </div>
        </div>
    );
}
