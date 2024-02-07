import DropdownArrowMain from "../../../public/images/furniture_configurator/dropdown-arrow-main.png";
import DropdownCloseIcon from "../../../public/images/furniture_configurator/dropdown-close-icon.png";
import DrawerTest from "../../../public/images/furniture_configurator/drawer-test.png";

export const DrawerAccordianBefore = ({handleToggle}) => {
  return (
    <div className="flex flex-row items-center gap-[25px]">
      <div>
        <div className="w-[76px] h-[50px]">
          <img className="w-[76px] h-[50px]" src={DrawerTest} alt="Plates_Test" />
        </div>
      </div>
      <div className="w-[2px] bg-[#D9D9D9] h-[43px]" />
      <div className="flex flex-row items-center gap-[25px]">
        <h1 className="font-[karla] text-[20px] font-medium">Name</h1>
        <div className="px-[12px] h-[30px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
          <p className="text-[20px] leading-[30px] font-[karla] font-bold "></p>
        </div>
      </div>
      <div className="w-[2px] bg-[#D9D9D9] h-[43px]" />
      <div className="flex flex-row items-center gap-[25px]">
        <h1 className="font-[karla] text-[20px] font-medium">Config ID</h1>
        <div className="px-[12px] h-[30px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
          <p className="text-[20px] leading-[30px] font-[karla] font-bold "></p>
        </div>
      </div>
      <div className="w-[2px] bg-[#D9D9D9] h-[43px]" />
      <div className="flex flex-row items-center gap-[25px]">
        <h1 className="font-[karla] text-[20px] font-medium">Price Einkauf</h1>
        <div className="px-[12px] h-[30px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
          <p className="text-[20px] leading-[30px] font-[karla] font-bold "></p>
        </div>
      </div>
      <button className="w-[31px]" onClick={handleToggle}>
        <img src={DropdownArrowMain} alt="dropdown_arrow_main" />
      </button>
    </div>
  )
}

export const DrawerAccordianAfter = ({handleToggle}) => {
    return (
        <div className="flex flex-row gap-[25px] my-[25px] items-start h-[132px]">
        <div className="flex items-center justify-center h-full">
          <div className="w-[182px]">
            <img className="w-[182px]" src={DrawerTest} alt="Plates_TEst" />
          </div>
        </div>
        <div className="w-[2px] bg-[#D9D9D9] h-full" />
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-row items-center gap-[25px]">
            <h1 className="font-[karla] text-[20px] font-medium">Name</h1>
            <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
              <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
                Side
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[25px]">
            <h1 className="font-[karla] text-[20px] font-medium">Name</h1>
            <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
              <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
                Side
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[25px]">
            <h1 className="font-[karla] text-[20px] font-medium">Name</h1>
            <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
              <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
                Side
              </p>
            </div>
          </div>
        </div>
        <div className="w-[2px] bg-[#D9D9D9] h-full" />
        <div className="flex flex-col items-start gap-[20px]">
          <div className="flex flex-row items-center gap-[25px]">
            <h1 className="font-[karla] text-[20px] font-medium">Config</h1>
            <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
              <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
                1. Wardrobe
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-[25px]">
            <h1 className="font-[karla] text-[20px] font-medium">Config</h1>
            <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
              <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
                1. Wardrobe
              </p>
            </div>
          </div>
        </div>
        <div className="w-[2px] bg-[#D9D9D9] h-full" />
        <div className="flex flex-row items-end gap-[25px] h-full flex-grow ">
          <div>
            <div className="flex flex-col gap-[5px]">
              <div className="flex flex-row justify-between w-[160px]">
                <h1 className="font-[karla] leading-[16px] font-medium text-[14px]">
                  Verschnitt-Edge:
                </h1>
                <h1 className="font-[karla] leading-[16px] font-medium text-[14px]">
                  20 %
                </h1>
              </div>
              <div className="flex flex-row justify-between w-[160px]">
                <h1 className="font-[karla] leading-[16px] font-medium text-[14px]">
                  Edge ID-match:
                </h1>
                <h1 className="font-[karla] leading-[16px] font-medium text-[14px]">
                  1234
                </h1>
              </div>
              <div className="flex flex-row justify-between w-[160px]">
                <h1 className="font-[karla] leading-[16px] font-medium text-[14px]">
                  Price verkauf:
                </h1>
                <h1 className="font-[karla] leading-[16px] font-medium text-[14px]">
                  12 €/m
                </h1>
              </div>
              <div className="flex flex-row justify-between w-[160px]">
                <h1 className="font-[karla] leading-[16px] font-medium text-[14px]">
                  Profit pro m:
                </h1>
                <h1 className="font-[karla] leading-[16px] font-medium text-[14px]">
                  1.6 €/m
                </h1>
              </div>
            </div>
          </div>
        </div>
        <button className="w-[31px]" onClick={handleToggle}>
          <img src={DropdownCloseIcon} alt="dropdown_arrow_main" />
        </button>
      </div>
    )
  }
