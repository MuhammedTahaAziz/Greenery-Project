import { useState } from "react";
import Button from "src/Components/Button";
import { useStateContext } from "src/Components/ContextProvider";
import useCardShowStore from "src/Store/useCardShowStore";
import axiosClient from "src/axios-client";

export default function ChangePassword() {
    const [oldPass, setOldPass] = useState();
    const [newPass, setNewPass] = useState();
    const [conNewPass, setConNewPass] = useState();
    const { user, setUser } = useStateContext();
    const { isOpen, setOpen } = useCardShowStore();
    const onsubmit = async () => {
        console.log(localStorage.getItem("ID"));
        if (newPass === conNewPass) {
            const payload = {
                OldPassword: oldPass,
                NewPassword: newPass,
                IdUser: localStorage.getItem("ID"),
            };
            await axiosClient
                .post("/ChangePassword", payload)
                .then(({ data }) => {
                    console.log(data);
                    console.log(data.user);
                    setUser(data.user);
                    setConNewPass("");
                    setOldPass("");
                    setNewPass("");
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            // err
        }
    };

    return (
        <div
            className="w-full min-h-screen-mt mt-[5.0125rem] bg-white flex justify-center items-center relative"
            onClick={() => {
                setOpen(false);
            }}
        >
            <div className="w-96 h-96 flex justify-center items-center">
                <form
                    className="w-full flex items-center flex-col gap-8"
                    method="post"
                >
                    <input
                        type="text"
                        className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
                        id="newPassword"
                        name="newPassword"
                        onChange={(event) => setOldPass(event.target.value)}
                        placeholder={`Old Password`}
                    />
                    <input
                        type="text"
                        className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
                        id="newPassword"
                        name="newPassword"
                        placeholder={`New Password`}
                        onChange={(event) => setNewPass(event.target.value)}
                    />
                    <input
                        type="text"
                        className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
                        id="newPassword"
                        name="newPassword"
                        placeholder={`Confirm New Password`}
                        onChange={(event) => setConNewPass(event.target.value)}
                    />
                    <Button
                        className="w-2/3 h-10 bg-[#087516] text-white font-bold rounded"
                        id={`newPasswordBtn`}
                        name={`newPasswordBtn`}
                        onClick={onsubmit}
                    >
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
}
