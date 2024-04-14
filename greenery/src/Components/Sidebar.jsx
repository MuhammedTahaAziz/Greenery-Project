import { Link } from "react-router-dom";
import useAdminDashboard from "src/Store/useAdminDashboardStore";
import { useStateContext } from "./ContextProvider";
import Admin from "src/Images/Admin.png";

export default function Sidebar() {
  const { user, token, notification, setUser, setToken } = useStateContext();

  const { isAdminDashboard, setAdminDashboard } = useAdminDashboard();
  const onsubmit =() =>{
    
    setUser({})
    setToken(null)
  setAdminDashboard(false)

  }
  return (
    <div className="w-1/5 h-full bg-[#135c1b] fixed left-0 z-20 flex flex-col items-center pt-10 gap-8 text-white font-bold text-xl">
      <p className="text-3xl">ADMINISTRATOR</p>
      <div className="size-40 ml-8">
        <img src={Admin} alt="" className="size-full" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Link to={"/admin/ViewUsers"} className="w-60 h-14 bg-transparent text-white hover:bg-white hover:text-black focus:bg-white focus:text-black flex items-center translate-x-10 pl-[2.375rem]">
          <span>View Users</span>
        </Link>
        <Link to={"/admin/ViewProduct"}  className="w-60 h-14 bg-transparent text-white hover:bg-white hover:text-black focus:bg-white focus:text-black flex items-center translate-x-10 pl-7">
          <span>View Product</span>
        </Link>
        <Link to={"/admin/AddProduct"}  className="w-60 h-14 bg-transparent text-white hover:bg-white hover:text-black focus:bg-white focus:text-black flex items-center translate-x-10 pl-8">
          <span>Add Product</span>
        </Link>
        {/* <Link to={"/admin/EditProduct"}  className="w-60 h-14 bg-transparent text-white hover:bg-white hover:text-black focus:bg-white focus:text-black flex items-center translate-x-10 pl-[2.125rem]">
          <span>Edit Product</span>
        </Link> */}
        <Link to={"/admin/OrderList"}  className="w-60 h-14 bg-transparent text-white hover:bg-white hover:text-black focus:bg-white focus:text-black flex items-center translate-x-10 pl-11">
          <span>Order List</span>
        </Link>
        <Link to={"/SignIn"}  className="w-60 h-14 bg-transparent text-white hover:bg-white hover:text-black focus:bg-white focus:text-black flex items-center translate-x-10 pl-12" onClick={onsubmit}>
          <span>Sign Out</span>
        </Link>
      </div>
    </div>
  );
}
