import DropdownArrowMain from "../../../public/images/furniture_configurator/dropdown-arrow-main.png";
import DropdownCloseIcon from "../../../public/images/furniture_configurator/dropdown-close-icon.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const PlatesTypeAccordianBefore = ( {handleToggle , index}) => {
  return (
    <div className="flex flex-row items-center gap-[25px]">
      <div>
        <div className="px-[12px] border border-solid border-black bg-[#F6F6F6] w-fit rounded-[3px]">
          <p className="text-[32px] leading-[30px] font-[karla] font-bold ">
            {index}.
          </p>
        </div>
      </div>
      <div className="w-[2px] bg-[#D9D9D9] h-[43px]" />
      <div className="flex flex-row items-center gap-[25px]">
        <h1 className="font-[karla] text-[20px] font-medium">Name</h1>
        <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
          <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
            Side
          </p>
        </div>
      </div>
      <div className="w-[2px] bg-[#D9D9D9] h-[43px]" />
      <div className="flex flex-row items-center gap-[25px]">
        <h1 className="font-[karla] text-[20px] font-medium">Config</h1>
        <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
          <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
            1. Wardrobe
          </p>
        </div>
      </div>
      <div className="w-[2px] bg-[#D9D9D9] h-[43px]" />
      <div className="flex flex-row items-center gap-[25px]">
        <h1 className="font-[karla] text-[20px] font-medium">Edge</h1>
        <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
          <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
            Side
          </p>
        </div>
      </div>
      <button className="w-[31px]" onClick={handleToggle}>
        <img src={DropdownArrowMain} alt="dropdown_arrow_main" />
      </button>
    </div>
  );
};

export const PlatesTypeAccordianAfter = ( {handleToggle}) => {
  return (
    <div className="flex flex-row gap-[25px] py-[24px] items-start">
      <div>
        <div className="px-[12px] border border-solid border-black bg-[#F6F6F6] w-fit rounded-[3px]">
          <p className="text-[32px] leading-[30px] font-[karla] font-bold ">
            1.
          </p>
        </div>
      </div>
      <div className="w-[2px] bg-[#D9D9D9] h-[43px]" />
      <div className="flex flex-row items-center gap-[25px]">
        <h1 className="font-[karla] text-[20px] font-medium">Name</h1>
        <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
          <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
            Side
          </p>
        </div>
      </div>
      <div className="w-[2px] bg-[#D9D9D9] h-[43px]" />
      <div className="flex flex-col items-center gap-[25px]">
        <div className="flex flex-row items-center gap-[25px]">
          <h1 className="font-[karla] text-[20px] font-medium">Config</h1>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button>
                <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
                  <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
                    1. Wardrobe
                  </p>
                </div>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 w-full origin-top-right rounded-bl-md rounded-br-md bg-white shadow-lg focus:outline-none">
                <div className="">
                  <Menu.Item>
                    {({ active }) => (
                      <div className="bg-[#F6F6F6] flex items-center justify-center border-l border-r border-b border-solid border-black">
                        <p
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-black",
                            "inline-block h-[30px] text-[20px] font-[karla] font-medium"
                          )}
                        >
                          H
                        </p>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active ? "bg-gray-300" : "bg-[#F6F6F6]",
                          "bg-[#F6F6F6] flex items-center justify-center border-l border-r border-b border-solid border-black"
                        )}
                      >
                        <p
                          href="#"
                          className="inline-block h-[30px] text-[20px] font-[karla] font-medium"
                        >
                          V
                        </p>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div className="bg-[#F6F6F6] flex items-center justify-center border-l border-r border-b border-solid border-black">
                        <p
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-black",
                            "inline-block h-[30px] text-[20px] font-[karla] font-medium"
                          )}
                        >
                          R
                        </p>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
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
        <div className="flex flex-row items-center gap-[25px]">
          <h1 className="font-[karla] text-[20px] font-medium">Config</h1>
          <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
            <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
              1. Wardrobe
            </p>
          </div>
        </div>
      </div>
      <div className="w-[2px] bg-[#D9D9D9] h-[43px]" />
      <div className="flex flex-row items-center gap-[25px]">
        <h1 className="font-[karla] text-[20px] font-medium">Edge</h1>
        <div className="px-[12px] w-[170px] border border-solid border-black bg-[#F6F6F6] rounded-[3px]">
          <p className="text-[20px] leading-[30px] font-[karla] font-bold ">
            Side
          </p>
        </div>
      </div>
      <button className="w-[31px]" onClick={handleToggle}>
        <img src={DropdownCloseIcon} alt="dropdown_arrow_main" />
      </button>
    </div>
  );
};
