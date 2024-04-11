// import Button from "src/Components/Button";
import "./module.css";
import { useState } from "react";
import axiosClient from "src/axios-client";

export default function AddProduct() {
  
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "flower",
    season: "spring",
    hasSess: true,
    price: null,
    discount: null,
    quantity: null,
  });
  
  console.log(productData);
  const checkGift = (data) => {
    if(data == "gift"){
      setProductData({ ...productData, category: data,hasSess: false });
      console.log(productData)
    }else if(data != "gift" && productData.hasSess == false){
      setProductData({ ...productData, category: data,hasSess:true,season: "spring" });
      console.log(productData)
    }else{
      setProductData({ ...productData, category: data});
      console.log(productData)
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    const photo = document.getElementById('proImage')
    e.preventDefault();
    const payload = new FormData();
    payload.append('name', productData.name);
    payload.append('image', photo.files[0]);
    payload.append('title', productData.description);
    payload.append('category', productData.category);
    payload.append('season', productData.season);
    payload.append('price', parseInt(productData.price));
    payload.append('quantity', parseInt(productData.quantity));

    if(productData.discount.length==0){
      payload.append('discount', parseInt(0));
    }else{
      payload.append('discount', parseInt(productData.discount));
    }
    try {
      const response = await axiosClient.post(
        "http://127.0.0.1:8000/api/insert",
        payload
      );
      console.log("Product added successfully:", response.data);
      alert("Product added successfully:", response.data);
      // Optionally, you can redirect the user or perform any other action after successful addition
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="w-4/5 h-auto absolute right-0">
      <p className="text-3xl tracking-wider font-bold mt-10 ml-6">
        Add Product
        <form
          className="w-11/12 mx-auto flex flex-col justify-end items-end"
          onSubmit={handleSubmit}
        >
          <div className="w-full py-10 text-xl grid grid-cols-2 gap-7">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow"
                id="description"
                name="description"
                value={productData.description}
                onChange={handleChange}
                placeholder="Description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                className="appearance-none  w-full h-12 block font-bold rounded-[4px] px-4 outline-none full-shadow"
                onChange={(e) => checkGift(e.target.value)}
              >
                        
                <option className="bg-gray-200 text-black" value="flower">Flower</option>
                <option className="bg-gray-200 text-black" value="tree">Tree</option>
                <option className="bg-gray-200 text-black" value="gift">Gift</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              {productData.hasSess ? <>
              <label htmlFor="season">Season</label>
              
              <select
              name="season"
                className="appearance-none  w-full h-12 block font-bold rounded-[4px] px-4 outline-none full-shadow"
                onChange={handleChange}
              >
                        
                <option className="bg-gray-200 text-black" value="spring">Spring</option>
                <option className="bg-gray-200 text-black" value="summer">Summer</option>
                <option className="bg-gray-200 text-black" value="autumn">Autumn</option>
                <option className="bg-gray-200 text-black" value="winter">Winter</option>
                <option className="bg-gray-200 text-black" value="fourseason">Four Season</option>
              </select>
              </> : ""}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price</label>
              <input
              required
                type="number"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow no-spinner"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                placeholder="Price"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discount">Discount</label>
              <input
                type="number"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow no-spinner"
                id="discount"
                name="discount"
                value={productData.discount}
                onChange={handleChange}
                placeholder="Discount"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quantity">Quantity</label>
              <input
              required
                type="number"
                className="w-full h-12 outline-none px-3 rounded-sm full-shadow no-spinner"
                id="quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleChange}
                placeholder="Quantity"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="photo">Photo</label>
              <div className="w-full h-12 px-3 rounded-sm full-shadow flex items-center">
                <input
                  type="file"
                  className="file:hidden"
                  id="proImage"
                  name="image"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            name="submit"
            id="submit"
            className="w-60 h-14 bg-[#087516] text-xl text-white rounded-md"
          >
            Add Product
          </button>
        </form>
      </p>
    </div>
  );
}
