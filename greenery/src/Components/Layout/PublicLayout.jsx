import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../ContextProvider";
import Navbar from "../Navbar";
import logo from "src/logo.svg";
import Button from "../Button";
import useCardShowStore from "src/Store/useCardShowStore";

// import useAdminDashboard from "src/Store/useAdminDashboardStore";
// import Sidebar from "../Sidebar";

export default function PublicLayout() {
  const { isOpen, setOpen } = useCardShowStore();
  // console.log(isOpen);
  // const { isAdminDashboard, setAdminDashboard } = useAdminDashboard();
  // console.log(isAdminDashboard);
  // let admin = isAdminDashboard;
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white z-20">
        <nav className="flex justify-between items-center w-5/6 h-[5rem] mx-auto">
          <div className="flex items-center">
            {" "}
            {/* Left Side of navigation bar */}
            <div className="flex justify-center items-center text-[1.625rem] text-[#088516] tracking-[0.125rem] font-semibold ">
              <img src={logo} alt="React Logo" className="" />
              REENERY
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="border-[1px] bg-[#088516] text-white font-semibold w-36 h-10 flex items-center text-xl gap-4 rounded-full">
              <img src="Search-White.png" className="w-8 h-8 ml-2" alt="" />
              Search
            </div>
            {/* <input
              className="w-[20rem] h-10 bg-gray-200 rounded-full px-3 outline-none"
              type={"text"}
              placeholder={"Search"}
            /> */}
            <div className="flex place-content-between gap-5 text-[#088516] text-[1rem] font-bold translate-x-[1.75rem]">
              <div>Home</div>
              <div>Product</div>
              <div>About</div>
              <div>Contact</div>
            </div>
          </div>
          {/* Right Side of navigation bar */}
          <div className="h-7 flex justify-between gap-6 text-[#088016] text-[1rem] font-semibold ml-8">
            <div>
              <img src="Saved.png" className="w-7 h-full" alt="" />
            </div>
            <div
              onClick={() => {
                // setOpen();
              }}
            >
              <img src="Add-To-Cart.png" className="w-7 h-full" alt="" />
            </div>
            
              <div>
                <img src="User.png" className="w-7 h-full" alt="" />
              </div>
          </div>
        </nav>
      </div>
      <div
        className=" relative w-full h-screen overflow-x-hidden scrollbar-hide"
        name="User-Interface"
      >
        <Outlet />
      </div>
    </>
  );
}
