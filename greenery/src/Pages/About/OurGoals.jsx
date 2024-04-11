export default function OurGoals() {
  return (
    <div className="w-full h-[45rem] mt-40 relative flex">
      <div className="mt-7 w-1/2 h-full">
        <p className="text-5xl font-bold">Our Goals</p>
        <ul className="list-disc ml-10 width-[] mt-16 flex flex-col gap-14">
          <li className="text-2xl">
            Educational Content and Community Engagement:
            <p className="text-lg">
              "Learn gardening together, share insights, grow a vibrant
              community."
            </p>{" "}
          </li>
          <li className="text-2xl">
            Personalized Customer Experience:
            <p className="text-lg">
              "Tailored advice, seamless service—your unique gardening journey
              awaits."
            </p>{" "}
          </li>
          <li className="text-2xl">
            Sustainability Initiatives:
            <p className="text-lg">
              "Nurture your garden sustainably; care for the Earth, one plant at
              a time."
            </p>{" "}
          </li>
          <li className="text-2xl">
            Market Expansion and Partnerships:
            <p className="text-lg">
              "Grow with us, expand horizons through enriching partnerships
              and connections."
            </p>{" "}
          </li>
        </ul>
        <p className="w-[31rem] ml-8 mt-16 text-xl text-justify leading-8 tracking-wide font-semibold"></p>
      </div>
      <img
        src="About-Images/Our-Goals.jpg"
        className="absolute right-0 w-[35rem] h-full"
        alt=""
      />
    </div>
  );
}
