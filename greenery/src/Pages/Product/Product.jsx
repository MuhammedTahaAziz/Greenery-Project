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

function checkFavourite(postID, favourite) {
    let check = false;
    favourite.forEach((favourite) => {
        if (favourite.id === postID) {check = true}
    });
    return check;
}

function postReturn(
    post,
    isProductCategory,
    isSeasonCategory,
    isDiscount,
    favorate
) {   

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
                    savedd={checkFavourite(post.id,favorate)}// daby awha bkayyyy
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
                    savedd={checkFavourite(post.id,favorate)}// daby awha bkayyyy
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
                    savedd={checkFavourite(post.id,favorate)}// daby awha bkayyyy
                ></Post>
            );
        }
    }

    return "";
}

export default function Product() {
    const [dataFetched, setDataFetched] = useState(false);
    const [posts, setPosts] = useState([]);
    const { products, setProduct } = useStateContext();
    const [load, setLoading] = useState(false);
    const { isSeasonCategory } = useSeasonCategory();
    const { isDiscount } = useDiscount();
    const { isProductCategory } = useProductCategory();

    const [favorate, setFavorate] = useState([]);

    const { isOpen, setOpen } = useCardShowStore();

    useEffect(() => {
        fetchData();
        fetchFavourite();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            axiosClient
                .get("/product_filter_name")
                .then(({ data }) => {
                    console.log(data.product);
                    setPosts(data.product);
                    setDataFetched(true);
                    setLoading(false);
                })
                .then((error) => {
                    setLoading(false);
                    console.error(error);
                });
        } catch (error) {
            setLoading(false);
        }
    };

    const fetchFavourite = async () => {
        setLoading(true);
        const payload = {
            id: parseInt(localStorage.getItem("ID")),
        };
        try {
            console.log(payload);
            axiosClient
                .post("/fav_us_pro_get", payload)
                .then(({ data }) => {
                    setFavorate(data.product);
                    setLoading(false);
                })
                .then((error) => {
                    // setLoading(false);
                    console.error(error);
                });
        } catch (error) {
            // setLoading(false);
            // setLoading(false);
        }
    };

    console.log(favorate);

    return (
        <div
            className="w-5/6 h-full mx-auto bg-transparent"
            onClick={() => {
                setOpen(false);
            }}
        >
            <ProductNav></ProductNav>
            <div className="grid grid-cols-5 gap-4 mt-10 pb-20">
                {load ? (
                    <div>
                        <tr>
                            <td colSpan="5" className="text-center">
                                Loading
                            </td>
                        </tr>
                    </div>
                ):
                posts.map((post) =>
                    postReturn(
                        post,
                        isProductCategory,
                        isSeasonCategory,
                        isDiscount,
                        favorate
                    )
                )}
            </div>
        </div>
    );
}
