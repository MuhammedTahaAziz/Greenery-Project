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
      <div className="flex flex-col items-center mt-6 gap-10">
        <Link to={"/admin/ViewUsers"}>
          <span>View Users</span>
        </Link>
        <Link to={"/admin/ViewProduct"}>
          <span>View Product</span>
        </Link>
        <Link to={"/admin/AddProduct"}>
          <span>Add Product</span>
        </Link>
        <Link to={"/admin/EditProduct"}>
          <span>Edit Product</span>
        </Link>
        <Link to={"/SignIn"} onClick={onsubmit}>
          <span>Sign Out</span>
        </Link>
      </div>
    </div>
  );
}
