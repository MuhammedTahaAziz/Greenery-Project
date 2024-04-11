import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "src/Components/ContextProvider";
// import Button from "src/Components/Button";
import useCustomerDataStore from "src/Store/useCustomerDataStore";
import axiosClient from "src/axios-client";

export default function SignupForm(second, method) {
    const { setUser, setToken } = useStateContext();
    const [usernameValue, setUsernameValue] = useState();
    const [photoValue, setPhotoValue] = useState();
    const [phoneValue, setPhoneValue] = useState();
    const [emailValue, setEmailValue] = useState();
    const [addressValue, setAddressValue] = useState();
    const [passwordValue, setPasswordValue] = useState();

    console.log(usernameValue);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = new FormData();
        payload.append("name", usernameValue);
        payload.append("image", photoValue);
        payload.append("PhoneNum", phoneValue);
        payload.append("email", emailValue);
        payload.append("address", addressValue);
        payload.append("password", passwordValue);

        // console.log(payload);

        await axiosClient
            .post("/register", payload)
            .then(({ data }) => {
                console.log(data);
                console.log(data.Token);
                console.log(data.user);
                if (data.error) {
                } else {
                    navigate("/SignIn");
                }
            })
            .catch((error) => {
                console.error(error);
            });
        // console.log(response.data);
        // console.log("Account Created successfully:", response.data);
        // alert("Account Created successfully:", response.data);
        // Handle success, e.g., redirect to account page
    };

    // console.log(CustomerData);

    return (
        <div
            className={`w-[40rem] h-[30rem] rounded-lg border-l-[1px] border-t-[1px] border-gray-50/60 backdrop-blur-sm bg-white/10 shadow-2xl shadow-black/50`}
        >
            <form
                className="w-full h-full mx-auto my-auto flex flex-col justify-center gap-5"
                method="post"
                onSubmit={handleSubmit}
            >
                <span className="w-full text-center text-4xl font-bold font-sans text-white block">
                    SIGN UP
                </span>
                <div className="w-11/12 mx-auto gap-4 grid grid-cols-2 ">
                    <div className="w-full mx-auto">
                        <label
                            htmlFor="Username"
                            className="w-full text-white font-bold"
                        >
                            Username
                        </label>
                        <input
                            className="w-full h-10 outline-none px-2  bg-white/20 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
                            placeholder={"Username"}
                            type={"text"}
                            id={"signupUsername"}
                            name={`signupUsername`}
                            onChange={(event) =>
                                setUsernameValue(event.target.value)
                            }
                            autoComplete={`off`}
                        />
                    </div>

                    <div className="w-full h-auto mx-auto">
                        <label
                            htmlFor="Picture"
                            className="w-full text-white font-bold"
                        >
                            Picture
                        </label>
                        <div className="w-full h-10 outline-none px-2 bg-white/20 rounded border-l-[1px] border-t-[1px] border-r-0 border-b-0 border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20 flex items-center cursor-pointer">
                            <input
                                className="file:w-full file:h-full file:hidden cursor-pointer"
                                placeholder={"Picture"}
                                type={"file"}
                                id={"signupPicture"}
                                name={`signupPicture`}
                                onChange={(event) =>
                                    setPhotoValue(event.target.files[0])
                                }
                                autoComplete={`off`}
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full mx-auto">
                        <label
                            htmlFor="phone"
                            className="w-full text-white font-bold"
                        >
                            Phone
                        </label>
                        <input
                            className="w-full h-10 outline-none px-2  bg-white/20 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
                            placeholder={"Phone"}
                            type={"text"}
                            id={"signupPhone"}
                            name={`signupPhone`}
                            onChange={(event) =>
                                setPhoneValue(event.target.value)
                            }
                            autoComplete={`off`}
                            required
                        />
                    </div>

                    <div className="w-full mx-auto">
                        <label
                            htmlFor="email"
                            className="w-full text-white font-bold"
                        >
                            Email
                        </label>
                        <input
                            className="w-full h-10 outline-none px-2  bg-white/20 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20 "
                            placeholder={"Email"}
                            type={"email"}
                            id={"signupEmail"}
                            name={`signupEmail`}
                            onChange={(event) =>
                                setEmailValue(event.target.value)
                            }
                            autoComplete={`off`}
                            required
                        />
                    </div>
                    <div className="w-full mx-auto">
                        <label
                            htmlFor="confirm Password"
                            className="w-full text-white font-bold"
                        >
                            Address
                        </label>
                        <input
                            className="w-full h-10 outline-none px-2 bg-white/20 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
                            placeholder={"Address"}
                            type={"text"}
                            id={"signupAddress"}
                            name={`signupAddress`}
                            onChange={(event) =>
                                setAddressValue(event.target.value)
                            }
                            autoComplete={`off`}
                            required
                        />
                    </div>

                    <div className="w-full mx-auto">
                        <label
                            htmlFor="password"
                            className="w-full text-white font-bold"
                        >
                            Password
                        </label>
                        <input
                            className="w-full h-10 outline-none px-2 bg-white/20 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
                            placeholder={"Password"}
                            type={"password"}
                            id={"signupPassword"}
                            name={`signupPassword`}
                            onChange={(event) =>
                                setPasswordValue(event.target.value)
                            }
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full h-12 mt-4 rounded text-center mx-auto text-xl text-white font-bold bg-white/20 shadow-xl col-span-2"
                        id="signupSendBtn"
                        name="signupSendBtn"
                    >
                        SIGN UP
                    </button>
                </div>
            </form>
        </div>
    );
}
