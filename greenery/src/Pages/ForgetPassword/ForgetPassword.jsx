import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/Components/Button";
import axiosClient from "src/axios-client";

export default function ForgetPassword() {
  const [email, setEmail] = useState(false);
  // console.log(setSecurityCode);
  
  const navigate  = useNavigate ();

  const onsubmit = async () => {

        const payload = {
            email: email,
        };
        await axiosClient
            .post("/forget", payload)
            .then(({ data }) => {
                console.log(data);
                alert("Email sent Successfully")
                navigate("/SignIn")
            })
            .catch((error) => {
                console.error(error);
                alert(error)
            });

};

  return (
    <div className="w-full min-h-screen-mt mt-[5.0125rem] bg-white flex justify-center items-center relative">
      <div className="w-96 h-96 flex justify-center items-center">
        <form className="w-full flex items-center flex-col gap-8" method="get">
          <input
            type="email"
            className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
            id="email"
            name="email"
            placeholder={`Enter your email`}
            
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Button
            className="w-2/3 h-10 bg-[#087516] text-white font-bold rounded"
            onClick={() => {
              onsubmit();
            }}
            id={`emailBtn`}
            name={`emailBtn`}
          >
            Send Email
          </Button>
        </form>
      </div>
    </div>
  );
}
