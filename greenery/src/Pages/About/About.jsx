import useCardShowStore from "src/Store/useCardShowStore";
import OurGoals from "./OurGoals";
import OurMission from "./OurMission";
import OurVision from "./OurVision";

export default function About() {
    const { setOpen } = useCardShowStore();
    return (
        <div
            className="mb-12 h-full"
            onClick={() => {
                setOpen(false);
            }}
        >
            <div
                className={`w-full h-[50vh] 2xl:h-[90.7vh] relative mt-[5.0125rem] overflow-hidden`}
                name="headerPhoto"
            >
                <img
                    src="About-Images/About-Header.jpg"
                    className="w-full h-full"
                    alt=""
                />
                <span className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white font-bold text-3xl 2xl:text-7xl w-full h-full bg-black/50 2xl:bg-black/40 flex items-center justify-center">
                    About Us
                </span>
            </div>
            <div className="mx-auto w-5/6  mt-[7rem] flex flex-col justify-center bg-transparent">
                <OurMission></OurMission>
                <OurVision></OurVision>
                <OurGoals></OurGoals>
            </div>
        </div>
    );
}
