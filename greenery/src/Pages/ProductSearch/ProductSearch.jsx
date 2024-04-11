import React, { useState, useEffect } from "react";
import axiosClient from "src/axios-client";

import Post from "src/Forms/Post/Post";
import useCardShowStore from "src/Store/useCardShowStore";

let handleSearchChangeValue;

export default function ProductSearch() {
    const [searchTerm, setSearchTerm] = useState();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);
    const [posts, setPosts] = useState([]);
    const [load, setLoading] = useState(false);
    const { isOpen, setOpen } = useCardShowStore();

    const ProductList = () => {
        useEffect(() => {
            fetchData();
        }, []);

        const fetchData = async () => {
            const payload = {
                userID: parseInt(localStorage.getItem("ID")),
            };
            try {
                axiosClient
                    .post("/productFavourite", payload)
                    .then(({ data }) => {
                        console.log(data);
                        setPosts(data.products);
                        setDataFetched(true);
                        setLoading(false);
                        setFilteredProducts(data.products);
                    })
                    .then((error) => {
                        setLoading(false);
                        console.error(error);
                    });
            } catch (error) {
                setLoading(false);
            }
        };

        const handleSearchChange = (event) => {
            const searchValue = event.target.value;
            setSearchTerm(searchValue);
            const filtered = posts.filter((product) =>
                product.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredProducts(filtered);
        };
        handleSearchChangeValue = handleSearchChange;
    };
    ProductList();

    return (
        <div
            className="w-5/6 mx-auto mt-[6rem] bg-transparent"
            onClick={() => {
                setOpen(false);
            }}
        >
            <div className="w-96 mx-auto">
                <input
                    className="w-96 h-10 bg-gray-200 rounded-full px-3 outline-none"
                    type={"text"}
                    placeholder={"Search"}
                    value={searchTerm}
                    onChange={handleSearchChangeValue}
                    autofocus
                />
            </div>
            <div className="grid grid-cols-5 gap-4 my-12">
                {filteredProducts.map((post) => (
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
