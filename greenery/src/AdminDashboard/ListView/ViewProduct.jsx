// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "src/Components/Button";
import postData from "src/Forms/Post/data";
import FlowerSeasonCategory from "./AdminFlowerCategory/FlowerSeasonCategory";
import TreeSeasonCategory from "./AdminTreeCategory/TreeSeasonsCategory";
import "./module.css";

import useFlowerSeasons from "./AdminFlowerCategory/useFlowerSeasons";
import useTreeSeasons from "./AdminTreeCategory/useTreeSeasons";
import useEditProductStore from "./useEditProductStore";
import { useEffect, useState } from "react";
import axiosClient from "src/axios-client";
import SpringFlower from "./AdminFlowerCategory/SpringFlower";
import SummerFlower from "./AdminFlowerCategory/SummerFlower";
import WinterFlower from "./AdminFlowerCategory/WinterFlower";
import AutumnFlower from "./AdminFlowerCategory/AutumnFlower";
import FourSeasonFlower from "./AdminFlowerCategory/FourSeasonFlower";
import SpringTree from "./AdminTreeCategory/SpringTree";
import SummerTree from "./AdminTreeCategory/SummerTree";
import WinterTree from "./AdminTreeCategory/WinterTree";
import AutumnTree from "./AdminTreeCategory/AutumnTree";
import FourSeasonTree from "./AdminTreeCategory/FourSeasonTree";
import GiftContent from "./GiftContent";
// import GiftContent from "./GiftContent";

let flowerCategory = "flower";
let treeCategory = "tree";
let giftCategory = "gift";

export default function ViewProduct() {
    const { isFlowerSeasons } = useFlowerSeasons();
    const { isTreeSeasons } = useTreeSeasons();
    // console.log(isIdProduct);
    const [posts, setPosts] = useState();
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    //  useEffect(()=>{
    //   axiosClient.get("/product_filter_name")
    //   .then((data)=>{
    //    const string = data.data;
    //    const [, jsonStr] = string.split('\r\n\r\n', 2);
    //    const jsonObject = JSON.parse(jsonStr);
    //    setPosts(jsonObject);
    //    console.log(posts);
    //   })
    //   .catch(()=>{

    //   });
    //  })

    // if (loading) {
    //   return <p>Loading...</p>;
    // }

    // if (error) {
    //   return <p>Error: {error}</p>;
    // }

    let flowerContent;
    switch (isFlowerSeasons) {
        case "spring":
            flowerContent = <SpringFlower />;
            break;
        case "summer":
            flowerContent = <SummerFlower />;
            break;
        case "autumn":
            flowerContent = <AutumnFlower />;
            break;
        case "winter":
            flowerContent = <WinterFlower />;
            break;
        case "fourseasons":
            flowerContent = <FourSeasonFlower />;
            break;
        default:
            flowerContent = <div>No content Selected</div>;
    }
    let treeContent;
    switch (isTreeSeasons) {
        case "spring":
            treeContent = <SpringTree />;
            break;
        case "summer":
            treeContent = <SummerTree />;
            break;
        case "autumn":
            treeContent = <AutumnTree />;
            break;
        case "winter":
            treeContent = <WinterTree />;
            break;
        case "fourseasons":
            treeContent = <FourSeasonTree />;
            break;
        default:
            treeContent = <div>No content Selected</div>;
    }

    let giftContent;
    switch (giftCategory) {
        case "gift":
            giftContent= <GiftContent />;
            break;
        default:
            treeContent = <div>No content Selected</div>;
    }

    console.log(flowerContent);

    return (
        <div className="w-4/5 h-auto absolute right-0">
            <p className="text-3xl tracking-wider font-bold mt-10 ml-6">
                All Products
            </p>
            <div className="w-11/12 py-10 mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-8">
                    <p className="text-2xl font-bold">Flowers</p>
                    <div className="">
                        <div className="flex gap-4">
                            <FlowerSeasonCategory></FlowerSeasonCategory>
                        </div>
                        {flowerContent}
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <p className="text-2xl font-bold">Trees</p>
                    <div className="">
                        <div className="flex gap-4">
                            <TreeSeasonCategory></TreeSeasonCategory>
                        </div>
                        {treeContent}
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <p className="text-2xl font-bold">Gifts</p>
                    <div className="">
                        {giftContent}
                    </div>
                </div>
            </div>
        </div>
    );
}
