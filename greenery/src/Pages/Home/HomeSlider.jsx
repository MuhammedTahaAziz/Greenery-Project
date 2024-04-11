import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function HomeSlider() {
  return (
    <Splide
      options={{
        rewind: true,
        height: "90.7vh",
        gap: "0.5rem",
        autoplay: true,
        pauseOnHover: true,
        interval: 2000,
        cover: true,
        breakpoints:{
          767:{
            height: "70.7vh",
          },
          640:{
            height: "50.7vh",
          },
          520:{
            height: "28vh",
          }
        },
      }}
      aria-label="My Favorite Images"
      className="mt-[5.0125rem] bg-black"
    >
      <SplideSlide className="h-full">
        <span className="absolute top-[47%] 2xl:top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white w-60 2xl:w-[50rem] text-center font-bold text-xl 2xl:text-5xl">
          Thank You for visiting us
        </span>
        <span className="absolute top-[60%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white font-bold w-48 2xl:w-[40rem] text-center text-md 2xl:text-2xl">
          You are in the right choice
        </span>
        <img
          src="Home-Images/HomeSlider/Stone-Plant.jpg"
          className="w-auto h-full block mx-auto"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <div className="absolute top-[50%] translate-y-[-50%] left-[16.5%] translate-x-[-50%] backdrop-blur-sm bg-gray/10 w- 2xl:w-[22rem] 2xl:h-80 flex flex-col rounded-lg border-white/30 border-[1px]">
          <span className="pl-5 pt-5 text-white font-bold text-4xl leading-normal">
            Experience Serenity through Home Greens
          </span>
          <span className="pl-5 pt-6 text-white font-bold w-[20.5rem]  tracking-wider leading-7 text-lg leading-normal">
            Cultivating comfort and vitality we ensure your home is adorned with
            thriving vibrant greenery
          </span>
        </div>
        <img
          src="Home-Images/HomeSlider/Home-Plant.jpg"
          className="h-full w-auto block mx-auto"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <div className="absolute top-[50%] translate-y-[-50%] left-[15.5%] translate-x-[-50%] backdrop-blur-sm bg-gray/10 w-[20.625rem] h-[19rem] flex flex-col rounded-lg border-white/30 border-[1px]">
          <span className="pl-5 pt-7 text-white font-bold text-4xl leading-normal">
            Your garden our masterpiece
          </span>
          <span className="pl-5 pt-5 text-white font-bold w-[19rem]  tracking-wide leading-7 text-lg leading-normal">
            Harmonizing environment and design, our passion unfolds in every
            petal entrust usself with the masterpiece of your garden
          </span>
        </div>
        <img
          src="Home-Images/HomeSlider/Garden-Plant.jpg"
          className="h-full w-auto block mx-auto"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <div className="absolute top-[50%] translate-y-[-50%] left-[16%] translate-x-[-50%] backdrop-blur-sm bg-gray/10 w-[21.25rem] h-80 flex flex-col rounded-lg border-white/30 border-[1px]">
          <span className="pl-5 pt-5 text-white font-bold text-4xl leading-normal">
            your office plants thrive here
          </span>
          <span className="pl-5 pt-6 text-white font-bold w-[20rem]  tracking-wider leading-7 text-lg leading-normal">
            Nurturing your office, we prioritize the growth of your plants
            creating a harmonious environment for focused and inspired work
          </span>
        </div>
        <img
          src="Home-Images/HomeSlider/Office-Plant.jpg"
          className="h-full w-auto block mx-auto "
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <div className="absolute top-[50%] translate-y-[-50%] left-[15%] translate-x-[-50%] backdrop-blur-sm bg-gray/10 w-80 h-[17.625rem] flex flex-col rounded-lg border-white/30 border-[1px]">
          <span className="pl-5 pt-7 text-white font-bold text-4xl leading-normal">
            Breathe life into your space
          </span>
          <span className="pl-5 pt-6 text-white font-bold w-[19rem]  tracking-wide leading-7 text-lg leading-normal">
            In our garden of commerce your company is the cherished bloom we
            nurture with passion
          </span>
        </div>
        <img
          src="Home-Images/HomeSlider/Company-Plant.jpg"
          className="h-full w-auto block mx-auto"
          alt=""
        />
      </SplideSlide>
    </Splide>
  );
}
