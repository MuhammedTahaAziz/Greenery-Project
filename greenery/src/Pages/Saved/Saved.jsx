import Post from "src/Forms/Post/Post";
import postData from "src/Forms/Post/data";
import React, { useState, useEffect } from "react";
import { useStateContext } from "src/Components/ContextProvider";
import axiosClient from "src/axios-client";
import useCardShowStore from "src/Store/useCardShowStore";
import useFavouriteProducts from "src/Store/useFavouriteProducts";


export default function Saved() {
    // const { saveds, setSaved } = useStateContext();
    const { favouriteProducts, setFavouriteProduct } = useFavouriteProducts();
    const [saved, setSaved] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isOpen, setOpen } = useCardShowStore();


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const payload = {
            id: parseInt(localStorage.getItem("ID")),
        };
        try {
            console.log(payload);
            axiosClient
                .post("/fav_us_pro_get", payload)
                .then(({ data }) => {
                    setSaved(data.product);
                    // setFavouriteProduct(data.product);
                    console.log("jjjjjjjjjjjjjjjjj");
                    console.log(saved);
                    // console.log(favouriteProducts);
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
    

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    console.log(saved);
    // setFavouriteProduct(saved);
    console.log(favouriteProducts);
    
    return (
        <div
            className="w-5/6 mx-auto mt-24 bg-transparent"
            onClick={() => {
                setOpen(false);
            }}
        >
            <div className="grid grid-cols-2 2xl:grid-cols-5 gap-3 2xl:gap-4 mb-12">
                {loading && (
                    <div>
                        <tr>
                            <td colSpan="5" className="text-center">
                                Loading
                            </td>
                        </tr>
                    </div>
                )}
                {saved.map((post) => (
                    <Post
                        key={+post.id}
                        id={post.id}
                        photo={"http://127.0.0.1:8000/products/" + post.image}
                        title={post.name}
                        price={post.price}
                        discount={post.Discound}
                        // savedd={post.id == favorite.id?true:false}// daby awha bkayyyy
                        savedd={
                            window.location.pathname == "/Saved"
                                ? true
                                : false
                        }
                        onClick={fetchData}

                        // state={post.is_favorited}
                    ></Post>
                ))}
            </div>
        </div>
    );
}
