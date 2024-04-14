import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import ProductSearch from "./Pages/ProductSearch/ProductSearch";
import About from "./Pages/About/About";
import Saved from "./Pages/Saved/Saved";
import AddToCard from "./Pages/Card/Card";
import SignIn from "src/Pages/SignIn/SignIn";
import SignUp from "src/Pages/SignUp/SignUp";
import Account from "./Pages/Account/Account";
import EditProfile from "./Pages/EditProfile/EditProfile";
import ChangePassword from "src/Pages/ChangePassword/ChangePassword";
import ForgetPassword from "src/Pages/ForgetPassword/ForgetPassword";

import Sidebar from "src/Components/Sidebar";
import ViewProduct from "src/AdminDashboard/ListView/ViewProduct";
import AddProduct from "src/AdminDashboard/AddProduct/AddProduct";
import EditProduct from "src/AdminDashboard/EditProduct/EditProduct";
import ViewUsers from "./AdminDashboard/ViewUsers/ViewUsers";

import useAdminDashboard from "src/Store/useAdminDashboardStore";
import useCardShowStore from "./Store/useCardShowStore";

function App() {
    const { isAdminDashboard, setAdminDashboard } = useAdminDashboard();
    console.log(isAdminDashboard);
    let admin = isAdminDashboard;
    const { isOpen, setOpen } = useCardShowStore();
    // const navigate = useNavigate();
    return (
        <main className="">
            <div
                className="mx-auto bg-white"
                onClick={() => {
                    setOpen(false);
                }}
            >
                <BrowserRouter>
                    {admin ? (
                        <div
                            className=" relative w-full h-screen overflow-x-hidden scrollbar-hide"
                            name="Admin-Dashboard"
                        >
                            <Sidebar />
                            <Routes>
                                <Route
                                    path="/ViewProduct"
                                    element={<ViewProduct />}
                                />
                                <Route
                                    path="/ViewUsers"
                                    element={<ViewUsers />}
                                />
                                <Route
                                    path="/AddProduct"
                                    element={<AddProduct />}
                                />
                                <Route
                                    path="/EditProduct"
                                    element={<EditProduct />}
                                />
                            </Routes>
                        </div>
                    ) : (
                        <div
                            className=" relative w-full h-screen overflow-x-hidden scrollbar-hide"
                            name="User-Interface"
                        >
                            <Navbar />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/Product" element={<Product />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/SignIn" element={<SignIn />} />
                                <Route path="/SignUp" element={<SignUp />} />
                                <Route path="/Account" element={<Account />} />
                                <Route path="/Saved" element={<Saved />} />
                                <Route
                                    path="/SingleProduct"
                                    element={<SingleProduct />}
                                />
                                <Route
                                    path="/ProductSearch"
                                    element={<ProductSearch />}
                                />
                                <Route
                                    path="/EditProfile"
                                    element={<EditProfile />}
                                />
                                <Route
                                    path="/ChangePassword"
                                    element={<ChangePassword />}
                                />
                                <Route
                                    path="/ForgetPassword"
                                    element={<ForgetPassword />}
                                />
                            </Routes>
                            <AddToCard></AddToCard>
                        </div>
                    )}
                </BrowserRouter>
            </div>
        </main>
    );
}

export default App;
