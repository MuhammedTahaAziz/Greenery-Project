import { Link } from "react-router-dom";
import useSeasonCategory from "src/Store/useSeasonCategory";
import useProductCategory from "src/Store/useProductCategory";

export default function PlantCollection() {
  const { isSeasonCategory, setSeasonCategory } = useSeasonCategory();
  const { isProductCategory, setProductCategory } = useProductCategory();

  return (
    <form
      action=""
      method="post"
      name="plantCollection"
      className="w-full mt-12 2xl:mt-24"
    >
      <span className="block text-center font-bold tracking-wide font-serif text-2xl 2xl:text-5xl">
        Flower Collection
      </span>
      <div className="grid grid-cols-4 2xl:grid-cols-3 gap-1 2xl:gap-2 mt-12 2xl:mt-20">
        <Link
          to={"/Product"}
          name="springFlower"
          className="h-40 2xl:h-96 w-full col-span-4 2xl:col-span-2 relative"
          onClick={() => setProductCategory("flower") || setSeasonCategory("spring")}
        >
          <span className="absolute bottom-1 left-2 2xl:bottom-4 2xl:left-4 text-white text-sm 2xl:text-2xl font-semibold">
            Spring
          </span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Columbine-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
        <Link
          to={"/Product"}
          name="summerFlower"
          className="h-40 2xl:h-96 w-full relative col-span-2 2xl:col-span-1"
          onClick={() => setProductCategory("flower") || setSeasonCategory("summer")}
        >
          <span className="absolute bottom-1 left-2 2xl:bottom-4 2xl:left-4 text-white  text-sm 2xl:text-2xl font-semibold">
            Summer
          </span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Marigold-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
        <Link
          to={"/Product"}
          name="autumnFlower"
          className="h-40 2xl:h-96 w-full relative col-span-2 2xl:col-span-1"
          onClick={() => setProductCategory("flower") || setSeasonCategory("autumn")}
        >
          <span className="absolute bottom-1 left-2 2xl:bottom-4 2xl:left-4 text-white text-sm 2xl:text-2xl font-semibold">
            Autumn
          </span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Dahlia-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
        <Link
          to={"/Product"}
          name="winterFlower"
          className="h-40 2xl:h-96 w-full col-span-4 2xl:col-span-2 relative"
          onClick={() => setProductCategory("flower") || setSeasonCategory("winter")}
        >
          <span className="absolute bottom-1 left-2 2xl:bottom-4 2xl:left-4 text-white text-sm 2xl:text-2xl font-semibold">
            Winter
          </span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Winter-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
      </div>
    </form>
  );
}
