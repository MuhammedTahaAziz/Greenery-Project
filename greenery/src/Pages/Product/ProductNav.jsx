import ProductCategory from "./ProductCategory";
import Button from "../../Components/Button";
import useSeasonCategory from "src/Store/useSeasonCategory";
import useDiscount from "src/Store/useDiscount";
import useProductCategory from "src/Store/useProductCategory";
import { useState } from "react";

export default function ProductNav() {
    const { isSeasonCategory, setSeasonCategory } = useSeasonCategory();
    const { isDiscount, setDiscount } = useDiscount();
    const { isProductCategory } = useProductCategory();
    console.log(isSeasonCategory);


    const [settingOpen, setSettingOpen] = useState(false);
    return (
        <form className=" mt-24 bg-white" method="">
            <div className="w-full mx-auto flex justify-between 2xl:justify-normal 2xl:gap-6 my-[0.9375rem]">
                <ProductCategory></ProductCategory>
                <form>
                    <div
                        className={`w-28 2xl:w-40 h-12 bg-gray-100 border-[1px] rounded relative cursor-pointer flex justify-center items-end flex-col gap-2`}
                    >
                        <div
                            className="w-full h-full flex justify-center items-center flex-col gap-1"
                            name="setting-container"
                            onClick={() => {
                                setSettingOpen(!settingOpen);
                            }}
                        >
                            {isDiscount === true
                                ? "discount"
                                : isSeasonCategory}
                        </div>
                        <div
                            className={`w-40 2xl:w-56 rounded overflow-hidden absolute top-14 right-0 2xl:left-0 ${
                                settingOpen
                                    ? "h-[17.5rem] duration-150 border-[1px] border-gray-200"
                                    : "w-0 h-0 duration-150 border-0"
                            }`}
                        >
                            <div
                                className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
                                onClick={() =>
                                    setSeasonCategory("all") ||
                                    setDiscount(false) ||
                                    setSettingOpen(!settingOpen)
                                }
                            >
                                All
                            </div>
                            <div
                                className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
                                onClick={() =>
                                    setSeasonCategory("spring") ||
                                    setDiscount(false) ||
                                    setSettingOpen(!settingOpen)
                                }
                            >
                                Spring
                            </div>
                            <div
                                className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
                                onClick={() =>
                                    setSeasonCategory("summer") ||
                                    setDiscount(false) ||
                                    setSettingOpen(!settingOpen)
                                }
                            >
                                Summer
                            </div>
                            <div
                                className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
                                onClick={() =>
                                    setSeasonCategory("autumn") ||
                                    setDiscount(false) ||
                                    setSettingOpen(!settingOpen)
                                }
                            >
                                Autumn
                            </div>
                            <div
                                className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
                                onClick={() =>
                                    setSeasonCategory("winter") ||
                                    setDiscount(false) ||
                                    setSettingOpen(!settingOpen)
                                }
                            >
                                Winter
                            </div>
                            <div
                                className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
                                onClick={() =>
                                    setSeasonCategory("fourseason") ||
                                    setDiscount(false) ||
                                    setSettingOpen(!settingOpen)
                                }
                            >
                                Four Seasons
                            </div>
                            <div
                                className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
                                onClick={() =>
                                    setDiscount(true) ||
                                    setSeasonCategory("") ||
                                    setSettingOpen(!settingOpen)
                                }
                            >
                                Discount
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </form>
    );
}
