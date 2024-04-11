import HomeSlider from "./HomeSlider";
import "./module.css";
import PlantCollection from "./PlantCollection";
import Service from "./Services";
import DiscountSection from "./DiscountSection";
import ChoosingUs from "./ChoosingUs";
import GiftCollection from "./GiftCollection";
import { useEffect } from "react";
import { useStateContext } from "src/Components/ContextProvider";
import axiosClient from "src/axios-client";
import useCardShowStore from "src/Store/useCardShowStore";
export default function Home({ className = "", children }) {
    const { user, token, setToken, setUser } = useStateContext();
    const { isOpen, setOpen } = useCardShowStore();
    console.log(user);
    console.log(localStorage.getItem("PHONE"));
    console.log(localStorage.getItem("IMAGE"));
    console.log(localStorage.getItem("ID"));
    console.log(localStorage.getItem("EMAIL"));
    useEffect(() => {
        // axiosClient.post('/check',localStorage.getItem("ID"))
        // .then((data)=>{
        // })
        // .catch((error)=>{
        // })
    });
    return (
        <div
            onClick={() => {
                setOpen(false);
            }}
        >
            <HomeSlider></HomeSlider>
            <div className="w-5/6 mx-auto mt-[1rem]">
                <PlantCollection></PlantCollection>
                <Service></Service>
            </div>
            <DiscountSection></DiscountSection>
            <div className="w-5/6 mx-auto mt-[1rem]">
                <ChoosingUs></ChoosingUs>
                <GiftCollection></GiftCollection>
            </div>
        </div>
    );
}
