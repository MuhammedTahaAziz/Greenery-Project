import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../ContextProvider";
// import { useEffect } from "react";
import axiosClient from "../../axios-client.js";
import Navbar from "../Navbar";
import AddToCard from "src/Pages/Card/Card";
// import Sidebar from "../Sidebar";
// import breakpoint from "./useScreenSizeHook";

export default function PrivateLayout() {
    // console.log("breakpoint: "+breakpoint);
    const { user, token, notification, setUser, setToken } = useStateContext();
    

    if (!token) {
        return <Navigate to="/SignIn" />;
    }
    if (localStorage.getItem("ROLE") != "user") {
        return <Navigate to="/admin/ViewUsers" />;
    }

    // console.log(localStorage.getItem("ROLE"));
    // const onLogout = (e) => {
    //     e.preventDefault();
    //     axiosClient.post("/logout").then(() => {
    //         setUser({});
    //         setToken(null);
    //     });
    // };

    return (
        <>
            <div className="mx-auto bg-white">
                <div
                    className=" relative w-full h-screen overflow-x-hidden scrollbar-hide"
                    name="User-Interface"
                >
                    <Navbar />

                    <Outlet />
                    <AddToCard></AddToCard>
                </div>
            </div>
        </>
    );
}
