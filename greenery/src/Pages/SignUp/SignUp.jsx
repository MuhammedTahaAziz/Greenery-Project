import SignupForm from "src/Pages/SignUp/SignupForm";
// import SigninForm from "src/Pages/SignIn/SigninForm";
// import Account from "src/Pages/Account/Account";
// import useSignupStore from "src/Store/useSignupStore";
// import useLogoutStore from "src/Store/useLogoutStore";

// import { useState } from "react";

export let profile = true;
export let username = true;
export let password = true;
export let adminUsername = "Administrator";
export let adminPassword = "11111111";
export default function SignUp({ className = "", children, alt }) {
  //   const { isSignedup } = useSignupStore();
  //   const { isLogout } = useLogoutStore();
  //   console.log(isSignedup);
    return (
      <div className="w-full h-[31rem] relative min-h-screen-mt mt-[5.0125rem] bg-transparent overflow-hidden">
        
        <img
          src="Profile-Images/BG-Profile.jpg"
          className="w-full h-[50rem] -translate-x-5 2xl:-translate-x-0 scale-x-[3] scale-y-100 2xl:scale-x-100 2xl:scale-y-100"
          alt=""
        />
        <div className="2xl:w-full 2xl:h-full absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
          <SignupForm className="" method="post"></SignupForm>
  
          {children}
        </div>
      </div>
    );
  }
  