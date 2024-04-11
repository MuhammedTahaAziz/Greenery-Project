import { useState } from "react";
import useFlowerSeasons from "./useFlowerSeasons";

export default function FlowerSeasonCategory(className) {
  let { isFlowerSeasons, setFlowerSeasons } = useFlowerSeasons();
  console.log(isFlowerSeasons);
  const [settingOpen, setSettingOpen] = useState(false);
  console.log(settingOpen);

  return (
    <form>
      <div
        className={`w-28 h-12 bg-gray-100 border-[1px] rounded relative cursor-pointer flex justify-center items-end flex-col gap-2`}
      >
        <div
          className="w-full h-full flex justify-center items-center flex-col gap-1"
          name="setting-container"
          onClick={() => {
            setSettingOpen(!settingOpen);
          }}
        >
          {isFlowerSeasons}
        </div>
        <div
          className={`w-48 rounded overflow-hidden absolute top-14 left-0 ${
            settingOpen
              ? "h-[12.5rem] duration-150 border-[1px] border-gray-200"
              : "w-0 h-0 duration-150 border-0"
          }`}
        >
          <div
            className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
            onClick={() => setFlowerSeasons("spring")|| setSettingOpen(!settingOpen)}
          >
            Spring
          </div>
          <div
            className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
            onClick={() => setFlowerSeasons("summer")|| setSettingOpen(!settingOpen)}
          >
            Summer
          </div>
          <div
            className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
            onClick={() => setFlowerSeasons("autumn")|| setSettingOpen(!settingOpen)}
          >
            Autumn
          </div>
          <div
            className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
            onClick={() => setFlowerSeasons("winter")|| setSettingOpen(!settingOpen)}
          >
            Winter
          </div>
          <div
            className="w-full h-10 bg-gray-50 hover:bg-gray-200 pl-4 flex justify-start items-center"
            onClick={() => setFlowerSeasons("fourseasons")|| setSettingOpen(!settingOpen)}
          >
            Four Seasons
          </div>
        </div>
      </div>
    </form>
  );
}
