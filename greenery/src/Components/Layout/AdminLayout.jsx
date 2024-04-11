import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useStateContext } from "../ContextProvider";
import { useEffect } from "react";
import axiosClient from "../../axios-client.js";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function AdminLayout() {
  const { user, token, notification, setUser, setToken } = useStateContext();

  if (!token) {
    return <Navigate to="/SignIn" />;
  }
  if(localStorage.getItem('ROLE') != "admin"){
    return <Navigate to="/" />
  }
  // const onLogout = (e) => {
  //   e.preventDefault();
  //   axiosClient.post("/logout")
  //     .then(() => {
  //       setUser({})
  //       setToken(null)
  //     })
  // }

    return (
      <div className="mx-auto bg-white">
        <div
          className=" relative w-full h-screen overflow-x-hidden scrollbar-hide"
          name="Admin-Dashboard"
        >
          <Sidebar />

          <Outlet />
        </div>
      </div>
    );
  
}
