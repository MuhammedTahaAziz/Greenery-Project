import Post from "src/Forms/Post/Post";
import postData from "src/Forms/Post/data";
import React, { useState, useEffect } from "react";
import { useStateContext } from "src/Components/ContextProvider";
import axiosClient from "src/axios-client";
import useCardShowStore from "src/Store/useCardShowStore";

export default function Saved() {
    const { saveds, setSaved } = useStateContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isOpen, setOpen } = useCardShowStore();

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
                .post("/SavedProdcuts", payload)
                .then(({ data }) => {
                    setSaved(data.products);
                    console.log(data.products);
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
                {saveds.map((post) => (
                    <Post
                        key={+post.id}
                        id={post.id}
                        photo={"http://127.0.0.1:8000/products/" + post.image}
                        title={post.name}
                        price={post.price}
                        discount={post.Discound}
                        state={post.is_favorited}
                    ></Post>
                ))}
            </div>
        </div>
    );
}
