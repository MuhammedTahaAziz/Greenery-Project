import SigninForm from "src/Pages/SignIn/SigninForm";

export default function SignIn({ className = "", children, alt }) {

  return (
    <div className="w-full h-[31rem] relative min-h-screen-mt mt-[5.0125rem] bg-transparent overflow-hidden">
      
      <img
        src="Profile-Images/BG-Profile.jpg"
        className="w-full h-[50rem] -translate-x-5 2xl:-translate-x-0 scale-x-[3] scale-y-100 2xl:scale-x-100 2xl:scale-y-100"
        alt=""
      />
      <div className="2xl:w-full 2xl:h-full absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
        <SigninForm className="" method="post"></SigninForm>

        {children}
      </div>
    </div>
  );
}
