import { Navigate, createBrowserRouter } from "react-router-dom";
import PrivateLayout from "./Components/Layout/PrivateLayout.jsx";
import PublicLayout from "./Components/Layout/PublicLayout.jsx";
import AdminLayout from "./Components/Layout/AdminLayout.jsx";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Product from "./Pages/Product/Product.jsx";
import About from "./Pages/About/About.jsx";
import Saved from "./Pages/Saved/Saved.jsx";
import SingleProduct from "./Pages/SingleProduct/SingleProduct.jsx";
import ProductSearch from "./Pages/ProductSearch/ProductSearch.jsx";
import EditProfile from "./Pages/EditProfile/EditProfile.jsx";
import ChangePassword from "./Pages/ChangePassword/ChangePassword.jsx";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword.jsx";
import Home from "./Pages/Home/Home.jsx";
import ViewUsers from "./AdminDashboard/ViewUsers/ViewUsers.jsx";
import AddProduct from "./AdminDashboard/AddProduct/AddProduct.jsx";
import EditProduct from "./AdminDashboard/EditProduct/EditProduct.jsx";
import ViewProduct from "./AdminDashboard/ListView/ViewProduct.jsx";
import Account from "./Pages/Account/Account.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import MyOrders from "./Pages/MyOrders/MyOrders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Saved",
        element: <Saved />,
      },
      {
        path: "/SingleProduct",
        element: <SingleProduct />,
      },
      {
        path: "/ProductSearch",
        element: <ProductSearch />,
      },
      {
        path: "/EditProfile",
        element: <EditProfile />,
      },
      {
        path: "/ChangePassword",
        element: <ChangePassword />,
      },
      {
        path: "/Account",
        element: <Account />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/MyOrders",
        element: <MyOrders />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/ViewUsers",
        element: <ViewUsers />,
      },
      {
        path: "/admin/AddProduct",
        element: <AddProduct />,
      },
      {
        path: "/admin/EditProduct",
        element: <EditProduct />,
      },
      {
        path: "/admin/ViewProduct",
        element: <ViewProduct />,
      },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/ForgetPassword",
        element: <ForgetPassword />,
      },
    ],
  },

  //   {
  //     path: '*',
  //     element: <NotFound />
  //   },
]);

export default router;
