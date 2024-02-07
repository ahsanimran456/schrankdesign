import Layout from "../../../Layouts/FurnitureConfigurator/Layout";
import SubLayout from "../../../Layouts/FurnitureConfigurator/SubLayout";
import SettingsIcon from "../../../../public/images/furniture_configurator/settings-icon.png";
import DeleteIcon from "../../../../public/images/furniture_configurator/delete-icon.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "./material.style.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Material = () => {
  const tabs = [
    {
      to: '/dashboard/furniture-configurator/calculation/home',
      label: 'General'
    },
    {
      to: '/dashboard/furniture-configurator/calculation/material',
      label: 'Material'
    }
  ];

  return (
    <Layout>
      <SubLayout tabs={tabs}>
        <div className="flex gap-[20px] overflow-x-auto overflow-y-hidden">
          <div className="min-w-[441px] body-height flex flex-col items-center shadow-md bg-white border-2 border-solid border-[#d9d9d9] rounded-[12px]">
            <div className="grid grid-cols-4 px-[10px] gap-[10px]">
              <div className="col-span-2 flex justify-center">
                <span className="font-[karla] text-[20px] text-black">
                  Variable-Name
                </span>
              </div>
              <div className="col-span-1 flex justify-center">
                <span className=" font-[karla] text-[20px] text-black">
                  Config-ID
                </span>
              </div>
            </div>
            <div className="h-[2px] w-full bg-black"></div>
            <div className="px-[10px] py-[11px] gap-[11px] flex flex-col">
              <div className="grid grid-cols-4 gap-[10px]">
                <div className="grid grid-cols-3 gap-[10px] col-span-3 bg-[#F6F6F6] px-[10px] py-[5px] rounded-[5px] border border-black border-solid">
                  <div className="col-span-2 h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
                    <h1 className="font-[karla] font-medium text-[14px]">
                      Material-Verkaufspreis
                    </h1>
                  </div>
                  <div className="col-span-1 h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
                    <h1 className="font-[karla] font-medium text-[14px]">
                      12345
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row justify-end gap-[10px] items-center col-span-1">
                  <button>
                    <img
                      className="w-[32px] h-[32px]"
                      src={SettingsIcon}
                      alt="Setting"
                    />
                  </button>
                  <button>
                    <img
                      className="w-[30px] h-[32px]"
                      src={DeleteIcon}
                      alt="Delete"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[7px] overflow-scroll body-height min-w-[700px] flex-col h-full flex items-center justify-between shadow-md bg-white border-2 border-solid border-[#d9d9d9] rounded-[12px]">
            <div>
              {/* {header} */}
              <div className="w-full flex flex-col">
                <div className="relative px-[10px] flex flex-row items-center w-full justify-between">
                  <div className="shadow-lg">
                    <button className="font-[karla] text-white font-bold bg-[#456779] rounded-[5px] px-[9px] py-[4px] shadow-lg">
                      Add Function
                    </button>
                  </div>
                  <div className="flex items-center gap-[5px] justify-between">
                    <img
                      src={SettingsIcon}
                      className="w-[32px]"
                      alt="Settings Icon"
                    />
                    <span className="font-[karla] text-[20px] text-black">
                      Edge-Verkaufspreis
                    </span>
                  </div>
                  <div className="shadow-lg">
                    <button className="font-[karla] text-white font-bold bg-[#577E60] rounded-[5px] px-[9px] py-[4px] shadow-lg">
                      Save
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-11 w-full px-[10px] gap-[10px] mt-[9px]">
                  <div className="col-span-3 flex justify-center">
                    <span className="font-[karla] text-[20px] text-black">
                      Material-Name
                    </span>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <span className=" font-[karla] text-[20px] text-black">
                      Config-ID
                    </span>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <span className=" font-[karla] text-[20px] text-black">
                      Value
                    </span>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <span className="font-[karla] text-[20px] text-black">
                      Test-Result
                    </span>
                  </div>
                </div>
                <div className="h-[2px] w-full bg-black"></div>
              </div>
              {/* body */}
              <div className="px-[10px] py-[11px] gap-[11px] flex flex-col">
                <div className="flex flex-col h-fit gap-[10px]">
                  {Array(2)
                    .fill(0)
                    .map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="grid grid-cols-11 auto-cols-min gap-[10px] items-center col-span-3 bg-[#F6F6F6] px-[10px] py-[5px] rounded-[5px] border border-black border-solid"
                        >
                          <div className="col-span-3 auto-cols-max text-ellipsis h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
                            <h1 className="w-full font-[karla] font-medium text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                              Material-Verkaufspreisasdasdasd
                            </h1>
                          </div>
                          <div className="col-span-2 h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
                            <span className="font-[karla] font-medium text-[14px]">
                              12345
                            </span>
                          </div>
                          <div className="col-span-2 h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
                            <span className="font-[karla] font-medium text-[14px]">
                              12345
                            </span>
                          </div>
                          <div className="col-span-2 h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
                            <span className="font-[karla] font-medium text-[14px]">
                              12345
                            </span>
                          </div>
                          <div className="col-span-2 flex flex-start justify-end">
                            <img
                              className="h-[34px]"
                              src={DeleteIcon}
                              alt="Delete Icon"
                            />
                          </div>
                        </div>
                      );
                    })}
                  <div className="flex justify-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button>
                          <div className="px-[32px] border border-solid border-black bg-[#36695C] rounded-[3px]">
                            <p className="text-[30px] text-white leading-[30px] font-[karla] font-bold ">
                              +
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
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-black",
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
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-black",
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
                  <div className="relative gap-[10px] col-span-3 bg-[#D9D9D9] px-[10px] py-[5px] rounded-[5px] border border-black border-solid">
                    <div className="flex flex-row justify-center gap-[34px]">
                      <p className="font-[karla] font-medium text-[20px]">
                        Config-ID
                      </p>
                      <div className="col-span-3 bg-white h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
                        <span className="font-[karla] font-medium text-[14px]">
                          12345
                        </span>
                      </div>
                    </div>
                    <div className="absolute flex flex-row gap-[10px] top-1/2 bottom-1/2 right-[10px] items-center justify-center">
                      <div className="">
                        <button className="shadow-lg font-[karla] text-white font-bold bg-[#577E60] rounded-[5px] px-[9px] py-[4px]">
                          Save
                        </button>
                      </div>
                      <div className="col-span-2 flex flex-start justify-end">
                        <img
                          className="h-[34px]"
                          src={DeleteIcon}
                          alt="Delete Icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* footer  */}
            <div className=" w-full flex flex-col">
              <div className="h-[2px] w-full bg-black"></div>
              <div className="flex flex-row px-[10px] items-center pt-[7px] justify-between">
                <div className="flex flex-row gap-[15px]">
                  <div className="shadow-lg">
                    <button className="font-[karla] text-white font-bold bg-[#456779] rounded-[5px] px-[9px] py-[4px] shadow-lg">
                      Add-Operator
                    </button>
                  </div>
                  <div className="shadow-lg">
                    <button className="font-[karla] text-white font-bold bg-[#456779] rounded-[5px] px-[9px] py-[4px] shadow-lg">
                      Add-Variable
                    </button>
                  </div>
                  <div className="shadow-lg">
                    <button className="font-[karla] text-white font-bold bg-[#456779] rounded-[5px] px-[9px] py-[4px] shadow-lg">
                      Add-Number
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-[10px]">
                  <p className="font-[karla] font-medium text-[20px]">Test-Total = </p>
                  <div className="col-span-3 bg-white h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
                    <span className="font-[karla] font-medium text-[16px]">
                      12345
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SubLayout>
    </Layout>
  );
};

export default Material;
