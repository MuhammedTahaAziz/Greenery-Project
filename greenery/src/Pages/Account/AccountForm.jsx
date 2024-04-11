import { useState } from "react";
import AccountSetting from "./AccountSetting";
import "./module.css";

import useCustomerDataStore from "src/Store/useCustomerDataStore";

export default function AccountForm({
  className = "",
  children,
  method,
  name,
  photo,
  number,
  email,
  onClick
}) {

  
  const { isCustomerData, setCustomerData } = useCustomerDataStore();
  return (
    <form action="" className={`${className}`} method={`${method}`} onClick={onClick}>
      <AccountSetting></AccountSetting>
      <div className="w-4/6 h-64 flex justify-between items-center">
        <div className="w-64 h-64 backdrop-blur-sm bg-white/5 rounded border-[10px] border-t-[#616161] border-r-[#505050] border-b-[#454545] border-l-[#676767] flex justify-center items-center overflow-hidden shadow-lg side-shadow">
          <div className="w-full h-full backdrop-blur-sm bg-white/5 border-[20px] border-[#dadada] flex justify-center items-center overflow-hidden shadow-lg">
              <img
                className="w-full h-full border-2  border-t-[#fefffa] border-r-[#a5a5a5] border-b-[#a5a5a5] border-l-[#fefffa]"
                src={photo}
                alt="Account logo"
              />
          </div>
        </div>
        <div className="flex flex-col font-bold gap-4 w-1/3">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="w-full text-[#088516] font-bold">
              Name
            </label>
            <input
              type="text"
              className="w-full h-10 outline-none px-2 rounded full-shadow text-[#088516] font-semibold placeholder:text-black shadow-xl shadow-black/20"
              id="name"
              name="name"
              placeholder={name}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="number" className="w-full text-[#088516] font-bold">
              Number
            </label>
            <input
              type="text"
              className="w-full h-10 outline-none px-2 rounded full-shadow text-[#088516] font-semibold placeholder:text-black shadow-xl shadow-black/20"
              id="number"
              name="number"
              placeholder={`${number}`}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="w-full text-[#088516] font-bold">
              Email
            </label>
            <input
              type="text"
              className="w-full h-10 outline-none px-2 rounded full-shadow text-[#088516] font-semibold placeholder:text-black shadow-xl shadow-black/20"
              id="email"
              name="email"
              placeholder={`${email}`}
              readOnly
            />
          </div>
        </div>
      </div>
      {children}
    </form>
  );
}
