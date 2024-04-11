import { useState } from "react";
import Button from "src/Components/Button";

export default function ForgetPassword() {
  const [SecurityCode, setSecurityCode] = useState(false);
  console.log(setSecurityCode);

  return (
    <div className="w-full min-h-screen-mt mt-[5.0125rem] bg-white flex justify-center items-center relative">
      <div className="w-96 h-96 flex justify-center items-center">
        <form className="w-full flex items-center flex-col gap-8" method="get">
          <input
            type="text"
            className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
            id="recieverCode"
            name="recieverCode"
            placeholder={`Enter your email`}
          />
          <button
            className="w-2/3 h-10 bg-[#087516] text-white font-bold rounded"
            onClick={() => {
              setSecurityCode(!SecurityCode);
            }}
            id={`securityCodeBtn`}
            name={`securityCodeBtn`}
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}
