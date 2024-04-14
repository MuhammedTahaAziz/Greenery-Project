import useCardShowStore from "src/Store/useCardShowStore";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const { setOpen } = useCardShowStore();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qa5v8i1', 'template_lrwk6xb', e.target, 'avkrOTF_mEMLrUxoB');
        alert("Email has been sent")
    }

    return (
        <div
            className="w-full h-[31rem] relative min-h-screen-mt mt-[5.0125rem] bg-transparent overflow-hidden"
            onClick={() => {
                setOpen(false);
            }}
        >
            <img
                src="Contact-Us.jpg"
                className="w-full h-[50rem] -translate-x-5 2xl:-translate-x-0 scale-x-[3] scale-y-100 2xl:scale-x-100 2xl:scale-y-100"
                alt=""
            />
            <div className="2xl:w-full 2xl:h-full absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center flex-col -translate-y-8">
                <p className="text-[7rem] text-white font-semibold">
                    Contact Us
                </p>
                <form className="w-96 flex flex-col gap-5" onSubmit={sendEmail}>
                    {/* <div className="w-full mx-auto">
                        <label
                            htmlFor="Username"
                            className="w-full text-white font-bold"
                        >
                            Name
                        </label>
                        <input
                            className="w-full h-10 bg-white/20 outline-none px-2  rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
                            placeholder={"Username"}
                            type={"text"}
                            id={"signinUsername"}
                            name={`signinUsername`}
                            //   value={username}
                            //   onChange={(event) => setUsername(event.target.value)}
                            required
                        />
                    </div> */}
                    <div className="w-full mx-auto">
                        <label
                            htmlFor="Username"
                            className="w-full text-white font-bold"
                        >
                            Email
                        </label>
                        <input
                            className="w-full h-10 bg-white/20 outline-none px-2  rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20"
                            placeholder={"Your Email"}
                            type={"text"}
                            id={"emailFrom"}
                            name={`email_from`}
                            //   value={username}
                            //   onChange={(event) => setUsername(event.target.value)}
                            // required
                        />
                    </div>
                    <div className="w-full mx-auto">
                        <label
                            htmlFor="message"
                            className="w-full text-white font-bold"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Write your message"
                            className="w-full h-32 bg-white/20 outline-none px-2 py-2 rounded border-l-[1px] border-t-[1px] border-stone-300 text-white font-semibold placeholder:text-white shadow-xl shadow-black/20 resize-none overflow-x-hidden scrollbar-hide"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full h-12 mt-4 rounded text-center mx-auto text-xl text-white font-bold bg-white/35 shadow-xl col-span-2"
                        id="signupSendBtn"
                        name="signupSendBtn"
                    >
                        SIGN UP
                    </button>
                </form>
            </div>
        </div>
    );
}
