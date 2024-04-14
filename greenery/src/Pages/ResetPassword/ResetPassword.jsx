import { useEffect, useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";

import Button from "src/Components/Button";
import axiosClient from "src/axios-client";

export default function ResetPassword() {
    const [resetPassword, setResetPassword] = useState(false);
    const [email, setEmail] = useState(false);
        const navigate  = useNavigate ();
        const location = useLocation();
        const [clientEmail, setClientEmail] = useState('');
        const [clientToken, setClientToken] = useState('');

      // console.log(setSecurityCode);

      useEffect(() => {
        // fetchData();
        const params = new URLSearchParams(location.search);
        const emailParam = params.get('email');
        const tokenParam = params.get('token');
        if (emailParam && tokenParam) {
          setClientEmail(emailParam);
          setClientToken(tokenParam);
        } else {
          // Redirect the user if email or token is missing
          navigate.push('/SignIn'); // Redirect to login page or any other page
        }

    }, [navigate, location.search]);

    const onsubmit = async (e) => {
      // e.preventDefault();
        const payload = {
            email:clientEmail,
            token:clientToken,
            password: resetPassword,
            // password:resetPassword,
        };
        await axiosClient
            .post("/reset-password", payload)
            .then(({ data }) => {
                console.log(data);
                alert("Password has been changed")
                navigate("/SignIn")
            })
            .catch((error) => {
                console.error(error);
                alert(error);
            });
    };

    return (
        <div className="w-full min-h-screen-mt mt-[5.0125rem] bg-white flex justify-center items-center relative">
            <div className="w-96 h-96 flex justify-center items-center">
                <form
                    className="w-full flex items-center flex-col gap-8"
                    method="get"
                >
                    <input
                        type="email"
                        className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
                        id="email"
                        name="email"
                        placeholder={`Password`}
                        value={clientEmail}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                        required
                        readOnly
                    />
                    <input
                        type="password"
                        className="w-full h-10 outline-none px-2 rounded full-shadow text-Black font-semibold placeholder:text-gray-400 shadow-xl shadow-black/20"
                        id="password"
                        name="password"
                        placeholder={`New Password`}
                        onChange={(event) =>
                            setResetPassword(event.target.value)
                        }
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
                        Send Password
                    </Button>
                </form>
            </div>
        </div>
    );
}
