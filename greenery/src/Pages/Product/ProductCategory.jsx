import useDiscount from "src/Store/useDiscount";
import useProductCategory from "src/Store/useProductCategory";
import useSeasonCategory from "src/Store/useSeasonCategory";


export default function ProductCategory() {
  let { isProductCategory , setProductCategory } = useProductCategory();
  let { isSeasonCategory , setSeasonCategory } = useSeasonCategory();
  let { isDiscount , setDiscount } = useDiscount();
  console.log(isSeasonCategory);
  console.log(isProductCategory);

  return (
    <form>
      <select
        name="categorylist"
        id="categorylist"
        value={isProductCategory}
        className="appearance-none  2xl:w-44 h-12 block bg-[#087516] font-bold text-white text-center rounded-[4px] px-4 2xl:px-0 outline-none"
        onChange={(e) => setProductCategory(e.target.value) || setSeasonCategory("all") || setDiscount(false)}
      >
        <option className="bg-gray-200 text-black" value="flower">Flower</option>
        <option className="bg-gray-200 text-black" value="tree">Tree</option>
        <option className="bg-gray-200 text-black" value="gift">Gift</option>
      </select>
    </form>
  );
}
