import { Link } from "react-router-dom";
import logo from "src/logo.svg";
import Button from "./Button";
import useCardShowStore from "src/Store/useCardShowStore";

export default function Navbar() {
    const { isOpen, setOpen } = useCardShowStore();
    return (
        <div className="fixed top-0 left-0 right-0 bg-white z-20">
            <nav className="flex justify-between items-center w-5/6 h-[5rem] mx-auto">
                <div className="flex items-center">
                    {" "}
                    {/* Left Side of navigation bar */}
                    <Link
                        to={"/"}
                        className="flex justify-center items-center text-[1.625rem] text-[#088516] tracking-[0.125rem] font-semibold "
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <img src={logo} alt="React Logo" className="" />
                        REENERY
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <Link
                        to={"/ProductSearch"}
                        className="border-[1px] bg-[#088516] text-white font-semibold w-36 h-10 flex items-center text-xl gap-4 rounded-full"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <img
                            src="Search-White.png"
                            className="w-8 h-8 ml-2"
                            alt=""
                        />
                        Search
                    </Link>
                    <div
                        className="flex place-content-between gap-5 text-[#088516] text-[1rem] font-bold translate-x-[1.75rem]"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <Link to={"/"} className="">
                            Home
                        </Link>
                        <Link to={"/Product"}>Product</Link>
                        <Link to={"/About"}>About</Link>
                        <Link to={"/Contact"}>Contact</Link>
                    </div>
                </div>
                {/* Right Side of navigation bar */}
                <div className="h-7 flex justify-between gap-6 text-[#088016] text-[1rem] font-semibold ml-8">
                    <Link
                        to={"/Saved"}
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <img src="Saved.png" className="w-7 h-full" alt="" />
                    </Link>
                    <div
                        onClick={() => {
                            isOpen ? setOpen(false) : setOpen(true);
                        }}
                    >
                        <Button>
                            <img
                                src="Add-To-Cart.png"
                                className="w-7 h-full"
                                alt=""
                            />
                        </Button>
                    </div>

                    <Link
                        to={"/Account"}
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <img src="User.png" className="w-7 h-full" alt="" />
                    </Link>
                </div>
            </nav>
        </div>
    );
}
