import "./module.css";
import useEditProductStore from "../ListView/useEditProductStore";
import { useState, useEffect } from "react";
import axiosClient from "src/axios-client";

export default function EditProduct() {
    const [dataFetched, setDataFetched] = useState(false);
    const [posts, setPosts] = useState([]);
    const [load, setLoading] = useState(false);

    const { isIdProduct } = useEditProductStore();
    console.log("clicked product: " + isIdProduct);

    const [productData, setProductData] = useState({});

    const [idValue, setIdValue] = useState();
    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState();
    const [categoryValue, setCategoryValue] = useState();
    const [seasonValue, setSeasonValue] = useState();
    const [priceValue, setPriceValue] = useState();
    const [discountValue, setDiscountValue] = useState();
    const [quantityValue, setQuantityValue] = useState();
    const [photoValue, setPhotoValue] = useState();
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        // Fetch the product data for the specified productId
        const fetchProductData = async () => {
            try {
                const response = await axiosClient
                    .get(`/product_filter_name`)
                    .then(({ data }) => {
                        setPosts(data);
                        setDataFetched(true);
                        setLoading(false);
                        console.log(data);

                        data.map((post) => {
                            if (post.id == isIdProduct) {
                                setProductData(post);
                                setIdValue(post.id);
                                setTitleValue(post.name);
                                setDescriptionValue(post.title);
                                // setCategoryValue(post.category_name);
                                setSelectedCategory(post.category_name);
                                setSeasonValue(post.filter_name);
                                setPriceValue(post.price);
                                setDiscountValue(post.Discound);
                                setQuantityValue(post.Quantity);
                                // setPhotoValue("http://127.0.0.1:8000/products/" + post.image);
                            }
                        });
                    });
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProductData();
    }, [productData.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {};
        const payload = new FormData();
        payload.append("id", idValue);
        payload.append("name", titleValue);
        payload.append("title", descriptionValue);
        payload.append("category_name", categoryValue);
        if (selectedCategory != "gift") {
            payload.append("filter_name", seasonValue);
        } else {
            payload.append("filter_name", "");
        }
        payload.append("price", priceValue);
        payload.append("Discound", discountValue);
        payload.append("Quantity", quantityValue);
        payload.append("image", photoValue);

        try {
            await axiosClient.post(`update`, payload);
            console.log("Product updated successfully");
            alert("Product updated successfully");
            console.log(payload);
            // Optionally, you can redirect the user or perform any other action after successful update
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };
    console.log(selectedCategory, seasonValue);
    return (
        <div className="w-4/5 h-auto absolute right-0">
            <p className="text-3xl tracking-wider font-bold mt-10 ml-6">
                Edit Product
                <form
                    className="w-11/12 h-[34.75rem] mx-auto flex flex-col justify-end items-end relative"
                    onSubmit={handleSubmit}
                >
                    <div className="w-full h-full py-10 text-xl grid grid-rows-4 grid-cols-3 gap-7">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="id">ID</label>
                            <input
                                type="text"
                                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                                id="id"
                                name="id"
                                value={idValue}
                                onChange={(event) =>
                                    setIdValue(event.target.value)
                                }
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                                id="name"
                                name="name"
                                value={titleValue}
                                onChange={(event) =>
                                    setTitleValue(event.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                                id="description"
                                name="description"
                                value={descriptionValue}
                                onChange={(event) =>
                                    setDescriptionValue(event.target.value)
                                }
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="category">Category</label>
                            <select
                                name="category"
                                className="appearance-none  w-full h-12 block font-bold rounded-[4px] px-4 outline-none full-shadow"
                                // defaultValue={selectedCategory}

                                onChange={(event) => {
                                    setCategoryValue(event.target.value);
                                    setSelectedCategory(event.target.value);
                                    !seasonValue&&setSeasonValue("spring");
                                }}
                            >
                                <option
                                    className="bg-gray-200 text-black"
                                    value="flower"
                                    selected={selectedCategory==="flower"}
                                >
                                    Flower
                                </option>
                                <option
                                    className="bg-gray-200 text-black"
                                    value="tree"
                                    selected={selectedCategory==="tree"}
                                >
                                    Tree
                                </option>
                                <option
                                    className="bg-gray-200 text-black"
                                    value="gift"
                                    selected={selectedCategory==="gift"}
                                >
                                    Gift
                                </option>
                            </select>
                        </div>

                        {selectedCategory !== "gift" ? (
                            <div className="flex flex-col gap-2">
                                <label htmlFor="season">Season</label>

                                <select
                                    name="season"
                                    className={`appearance-none  w-full h-12 block font-bold rounded-[4px] px-4 outline-none full-shadow `}
                                    value={seasonValue}
                                    onChange={(event) =>
                                        setSeasonValue(event.target.value)
                                    }
                                >
                                    <option
                                        className="bg-gray-200 text-black"
                                        value="spring"
                                    >
                                        Spring
                                    </option>
                                    <option
                                        className="bg-gray-200 text-black"
                                        value="summer"
                                    >
                                        Summer
                                    </option>
                                    <option
                                        className="bg-gray-200 text-black"
                                        value="autumn"
                                    >
                                        Autumn
                                    </option>
                                    <option
                                        className="bg-gray-200 text-black"
                                        value="winter"
                                    >
                                        Winter
                                    </option>
                                    <option
                                        className="bg-gray-200 text-black"
                                        value="fourseason"
                                    >
                                        Four Season
                                    </option>
                                </select>
                            </div>
                        ) : (
                            <div className="w-full"></div>
                        )}

                        <div className="flex flex-col gap-2">
                            <label htmlFor="price">Price</label>
                            <input
                                type="text"
                                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                                id="price"
                                name="price"
                                value={priceValue}
                                onChange={(event) =>
                                    setPriceValue(event.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="discount">Discount</label>
                            <input
                                type="text"
                                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                                id="discount"
                                name="discount"
                                value={discountValue}
                                onChange={(event) =>
                                    setDiscountValue(event.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="text"
                                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                                id="quantity"
                                name="quantity"
                                value={quantityValue}
                                onChange={(event) =>
                                    setQuantityValue(event.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="photo">Photo</label>
                            <div className="w-full flex gap-2">
                                <div className="w-full h-12 flex items-center px-3 text-sm outline-none full-shadow rounded-sm">
                                    <input
                                        type="file"
                                        className="file:hidden cursor-pointer"
                                        id="photo"
                                        name="photo"
                                        onChange={(event) =>
                                            setPhotoValue(event.target.files[0])
                                        }
                                        required
                                    />
                                </div>
                                {/* <img
                                    // src={photoValue}
                                    alt=""
                                    className="size-12 rounded-sm"
                                /> */}
                            </div>
                        </div>
                    </div>
                    <input
                        type="submit"
                        name="submit"
                        id="submit"
                        value={"Edit Product"}
                        className="w-60 h-16 bg-[#087516] text-xl text-white rounded-md"
                    />
                </form>
            </p>
        </div>
    );
}
