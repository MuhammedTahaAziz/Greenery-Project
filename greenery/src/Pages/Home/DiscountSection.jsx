import { Link } from "react-router-dom";
import useٍSeasonCategory from "src/Store/useSeasonCategory";
import useDiscount from "src/Store/useDiscount";

export default function DiscountSection(second) {
  const { setSeasonCategory } = useٍSeasonCategory();
  const { setDiscount } = useDiscount();

  return (
    <div>
      <p className="w-full text-center text-2xl 2xl:text-4xl font-bold font-serif mt-[21.25rem] 2xl:mt-20">
        Profit Most Discounts
      </p>
      <div className="w-full h-64 2xl:h-[35rem] bg-green-100">
        <div className="mx-auto w-5/6 h-full">
          <div className="flex mt-10 2xl:mt-14">
            <div className="w-20 2xl:w-auto h-20 2xl:flex ml-2 2xl:ml-5 mt-5 2xl:mt-0">
              <img
                src="Home-Images/FlowerCollection/Pink-Flower.jpg"
                className="w-64 2xl:w-96 h-36 2xl:h-[28rem] rounded-lg 2xl:rounded-2xl -rotate-6 -ml-5 2xl:ml-0"
                alt=""
              />
              <img
                src="Home-Images/FlowerCollection/Pink-Tree.jpg"
                className="w-40 2xl:w-72 h-32 2xl:h-96 rounded-lg 2xl:rounded-2xl rotate-12 -translate-x-32 -translate-y-16 2xl:translate-x-0 2xl:translate-y-0 ml-40 mt- 2xl:mt-36 2xl:-ml-16"
                alt=""
              />
            </div>
            <div className="ml-40 2xl:ml-14 -translate-x-24 2xl:-translate-x-0">
              <p className="w-48 h-14 mt-5 2xl:w-[36rem] 2xl:h-28 2xl:mt-5 flex justify-center items-center bg-green-700 text-xs 2xl:text-4xl text-white font-serif font-semibold rounded rounded-tr-3xl">
                Why pay more elsewhere?
              </p>
              <p className="w-44 2xl:w-[36rem] my-5 2xl:my-10 2xl:leading-7 tracking-tight 2xl:tracking-wide text-[9px] 2xl:text-2xl font-medium 2xl:font-semibold">
                Treat yourself to a savings shopping trip with our e-commerce
                platform, where unbeatable prices guarantee you a low-cost
                ticket
              </p>
              <p className="2xl:w-[36rem] 2xl:h-28 2xl:leading-7 tracking-tight 2xl:tracking-wide text-[9px] 2xl:text-2xl font-medium 2xl:font-semibold">
                Get the most beautiful products at lower prices than anywhere
                else with us
              </p>
              <Link
                to={"/Product"}
                className="2xl:w-72 2xl:h-20"
                onClick={() => setDiscount(true) || setSeasonCategory("")}
              >
                <p className="mx-auto w-32 h-10 2xl:w-72 2xl:h-20 flex justify-center items-center bg-green-700 2xl:text-3xl text-white font-semibold rounded 2xl:rounded-md mt-4 2xl:mt-0">
                  See More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
