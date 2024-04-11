import { Link } from "react-router-dom";
import useDiscount from "src/Store/useDiscount";
import useProductCategory from "src/Store/useProductCategory";
import useSeasonCategory from "src/Store/useSeasonCategory";

export default function GiftCollection(second) {
  const { setProductCategory } = useProductCategory();
  const { isSeasonCategory, setSeasonCategory } = useSeasonCategory();
  const { isDiscount, setDiscount } = useDiscount();

  return (
    <div className="mt-12 mb-12 2xl:mt-20 2xl:mb-20">
      <p className="w-full text-center text-2xl 2xl:text-4xl font-bold font-serif 2xl:mt-20">
        Gift Collection
      </p>
      <div className="w-full h-60 2xl:h-[35rem] mt-12 relative">
        <img
          src="Home-Images/Gift-Flower.jpg"
          className="w-full h-full rounded-xl 2xl:rounded-3xl"
          alt=""
        />
        <div className="w-full h-full bg-black/40 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center gap-2 2xl:gap-5 text-white rounded-xl 2xl:rounded-3xl">
          <p className="w-52 2xl:w-[33rem] text-center text-[10px] 2xl:text-3xl font-semibold -mt-10 2xl:-mt-20">
            Make moments memorable - choose from our exquisite range of gifts
            for your loved ones
          </p>
          <p className="text-xs 2xl:text-xl font-semibold">
            Click this to see Gift Products
          </p>
          <Link
            onClick={() => setProductCategory("gift") || setSeasonCategory("all") || setDiscount(false)}
            to={"/Product"}
          >
            <p className="w-32 h-10 2xl:w-52 2xl:h-14 border-[1px] border-stone-600 2xl:border-stone-500 rounded 2xl:rounded-lg backdrop-blur-sm bg-black/20 2xl:bg-black/10 text-xs 2xl:text-xl font-semibold flex justify-center items-center">
              See More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
