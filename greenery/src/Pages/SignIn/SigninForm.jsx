import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Button from "src/Components/Button";
import { useStateContext } from "src/Components/ContextProvider";
import axiosClient from "src/axios-client";

// export let username = true;
// export let password = true;
export let adminUsername = "Administrator";
export let adminPassword = "Admin1234";

export default function SigninForm({ className = "", children, method }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken } = useStateContext();
  const navigate = useNavigate();
  const user = {
    email: username,
    password: password
  }

  // let loginUsername = username;
  // console.log(loginUsername);

  // let loginPassword = password;

  const handleSignIn = () => {

    axiosClient.post('/login',user)
    .then(({data})=>{


      // Split the string at the empty line to separate headers from the JSON object
  
      try {
        // Parse the JSON object
        console.log(data)
        setUser(data.user)
        setToken(data.Token)
        localStorage.setItem("ID",data.id)
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
      // console.log(data)
      // console.log(data.data)
      // console.log(data)
      // setUser(loginUsername);
      // setToken(loginUsername);
      // navigate("/ViewUsers")
    })
    .catch((error)=>{
        console.log(error)
    })
  };

  return (
    <div
      className={`w-[25rem] h-[30rem] rounded-lg border-l-[1px] border-t-[1px] border-gray-50/60 backdrop-blur-sm bg-white/10 shadow-2xl shadow-black/50 ${className}`}
    >
      <form
        className="w-full h-full rounded-3xl mx-auto my-auto flex flex-col justify-center gap-9"
        method="get"
        onSubmit={""}
      >
        <span className="w-full text-center text-4xl font-bold font-sans text-white block -mt-1">
          SIGN IN
        </span>
        <div className="w-10/12 mx-auto gap-4 grid">
          <div className="w-full mx-auto">
            <label htmlFor="Username" className="w-full text-white font-bold">
              Username
            </label>
            <input
              className="w-full h-10 bg-white/20 outline-none px-2  rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
              placeholder={"Username"}
              type={"text"}
              id={"signinUsername"}
              name={`signinUsername`}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="w-full mx-auto">
            <label
              htmlFor="Password"
              className="w-full block text-white font-bold"
            >
              Password
            </label>
            <input
              className="w-full h-10 bg-white/20 outline-none px-2  rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
              placeholder={"Password"}
              type={"Password"}
              id={"signinPassword"}
              name={`signinPassword`}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <Link to={"/ForgetPassword"}>
              <span className="w-full h-30 text-white text-sm block tracking-wide mt-1 font-semibold">
                Forget your password?
              </span>
            </Link>
          </div>
        </div>
        <div className="w-10/12 mx-auto h-20 flex flex-col ">
          <Button
            type="submit"
            className="w-full h-full rounded mx-auto text-xl text-white font-bold bg-white/20 shadow-xl"
            id="signinSendBtn"
            name="signinSendBtn"
            value={`Send`}
            onClick={handleSignIn}
          >
            SIGN IN
          </Button>
          <Link to={"/SignUp"} className="mx-auto block text-white mt-[6px]">
            Don't have account? <span className="font-semibold">Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
