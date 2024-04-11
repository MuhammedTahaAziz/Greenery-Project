import { useState, useEffect } from "react";
import { useStateContext } from "src/Components/ContextProvider";
import useCardShowStore from "src/Store/useCardShowStore";
import axiosClient from "src/axios-client";

export default function EditProfile() {
    const { user, setUser } = useStateContext();
    const { isOpen, setOpen } = useCardShowStore();
    const [usernameValue, setUsernameValue] = useState(user);
    const [phoneValue, setPhoneValue] = useState(localStorage.getItem("PHONE"));
    const [photoValue, setPhotoValue] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = new FormData();
        payload.append("name", usernameValue);
        payload.append("PhoneNum", phoneValue);
        payload.append("image", photoValue);
        payload.append("IdUser", localStorage.getItem("ID"));

        try {
            await axiosClient
                .post(`profile`, payload)
                .then(({ data }) => {
                    console.log(data);

                    setUser(data.user);
                    // setToken(data.Token);
                    alert("Profile updated successfully");
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.error("Error updating User Profile:", error);
        }
    };

    return (
        <div
            className="w-full min-h-screen-mt mt-[5.0125rem] bg-white flex justify-center items-center relative"
            onClick={() => {
                setOpen(false);
            }}
        >
            <div className="w-auto h-4/5 flex justify-center gap-2">
                <form
                    className="w-full h-full flex items-center flex-col gap-9"
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <div className="flex gap-10">
                        <div className="size-48 backdrop-blur-sm bg-white/5 border-2 border-[#dadada] flex justify-center items-center overflow-hidden shadow-lg">
                            <img
                                className="w-full h-full border-2 border-t-[#fefffa] border-r-[#a5a5a5] border-b-[#a5a5a5] border-l-[#fefffa]"
                                src={
                                    "http://127.0.0.1:8000/profiles/" +
                                    localStorage.getItem("IMAGE")
                                }
                                alt="Account logo"
                            />
                        </div>
                        <div className="flex flex-col gap-9">
                            <input
                                type="text"
                                className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
                                id="editUsername"
                                name="editUsername"
                                placeholder={`username`}
                                value={usernameValue}
                                onChange={(event) =>
                                    setUsernameValue(event.target.value)
                                }
                                required
                            />
                            <input
                                type="text"
                                className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
                                id="editNumber"
                                name="editNumber"
                                placeholder={`number`}
                                value={phoneValue}
                                onChange={(event) =>
                                    setPhoneValue(event.target.value)
                                }
                                required
                            />
                            <div className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold text-gray-400 placeholder:text-gray-400 shadow-xl shadow-black/20 flex items-center cursor-pointer">
                                <input
                                    type={"file"}
                                    className="file:w-full file:h-full file:hidden cursor-pointer"
                                    id="editPhoto"
                                    name="editPhoto"
                                    placeholder={`photo`}
                                    onChange={(event) =>
                                        setPhotoValue(event.target.files[0])
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-2/3 h-10 bg-[#087516] text-white font-bold rounded "
                        id={`editProfileBtn`}
                        name={`editProfileBtn`}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
