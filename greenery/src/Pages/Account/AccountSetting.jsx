import { useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "src/Components/ContextProvider";
// import useLogoutStore from "src/Store/useLogoutStore";
import useCustomerDataStore from "src/Store/useCustomerDataStore";

export default function AccountSetting(second) {
    const { setUser, setToken } = useStateContext();

    const [settingOpen, setSettingOpen] = useState(false);
    console.log(settingOpen);
    const OnLoagout = () => {
        setUser({});
        setToken(null);
    };
    return (
        <div
            className={`w-auto h-auto absolute top-28 right-60 cursor-pointer flex justify-center items-end flex-col gap-2`}
        >
            <div
                className="w-8 h-auto flex justify-center items-center flex-col gap-1 translate-x-3"
                name="setting-container"
                onClick={() => {
                    setSettingOpen(!settingOpen);
                }}
            >
                <div className={`w-2 h-2 bg-slate-500 rounded-full`}></div>
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
            </div>
            <div
                className={`w-40 rounded overflow-hidden ${
                    settingOpen
                        ? "h-[7.5rem] duration-150 border-[1px] border-slate-300"
                        : "w-0 h-0 duration-150 border-0"
                }`}
            >
                <div className="w-full h-10 bg-slate-50 hover:bg-slate-200">
                    <Link to={"/EditProfile"} className="size-full  flex justify-center items-center">
                        Edit Profile
                    </Link>
                </div>
                <div className="w-full h-10 bg-slate-50 hover:bg-slate-200">
                    <Link to={"/ChangePassword"} className="size-full flex justify-center items-center">
                        Change Password
                    </Link>
                </div>
                <div className="w-full h-10 bg-slate-50 hover:bg-slate-200">
                    <Link
                        to={"/SignIn"}
                        className="size-full flex justify-center items-center"
                        onClick={OnLoagout}
                    >
                        Log Out
                    </Link>
                </div>
            </div>
        </div>
    );
}
