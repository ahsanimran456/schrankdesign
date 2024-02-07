import DropdownArrowMain from "../../../public/images/furniture_configurator/dropdown-arrow-main.png";
import DropdownCloseIcon from "../../../public/images/furniture_configurator/dropdown-close-icon.png";
import PlatesTest from "../../../public/images/furniture_configurator/plates-test.png";
import DeleteIcon from "../../../public/images/furniture_configurator/delete-icon.png";

export const PartListAccordianBefore = ({ handleToggle }) => {
  return (
    <div className="flex flex-row items-center gap-[25px]">
      <div>
        <div className="h-[45px]">
          <img
            className="h-[45px]"
            src={
              "https://s3-alpha-sig.figma.com/img/b66d/cda0/c5cc55caaf26b0e757794c778ba1a5fc?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J3Vr3lFtIqqVzjjiBgwx9IpgtE8ZvX02xmeQe4OEieGP-U9vVLfu8eDAD22b6Lz-m-7HIk9v-ED4luFl~cDHEUNhrTYPJxHgfvAYcejCJv-hRHCmUP364EEJ8A0CFWYYb8MSm-T3JSuXPL8DHnHmt59eLKIWC4bA~rq8GkkEMT~L1ePSPFObtiky15E6Yuv3dddxjhq5hkE4fEojO1WEoVAxtzTHN-k3K1v8Gi7GcpRdzU13tJAnOC87I9uFgnE9Y-ccKXya0Gl2aBG0pvx8C9cln0bM-OTqnXNnFP2s-PiCCwGxvNoY-H9uTqqQGLjwnZNXXd3Gmzzfno6QXvd8YQ__"
            }
            alt="Plates_Test"
          />
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
  );
};

export const PartListAccordianAfter = ({ handleToggle }) => {
  return (
    <div className="flex flex-col relative w-full pr-[10px] pb-[10px]">
      <div className="flex flex-row gap-[25px] my-[25px] items-start">
        <div className="flex items-center justify-center h-full">
          <div className="w-[163px]">
            <img
              className="w-[163px]"
              src={
                "https://s3-alpha-sig.figma.com/img/b66d/cda0/c5cc55caaf26b0e757794c778ba1a5fc?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J3Vr3lFtIqqVzjjiBgwx9IpgtE8ZvX02xmeQe4OEieGP-U9vVLfu8eDAD22b6Lz-m-7HIk9v-ED4luFl~cDHEUNhrTYPJxHgfvAYcejCJv-hRHCmUP364EEJ8A0CFWYYb8MSm-T3JSuXPL8DHnHmt59eLKIWC4bA~rq8GkkEMT~L1ePSPFObtiky15E6Yuv3dddxjhq5hkE4fEojO1WEoVAxtzTHN-k3K1v8Gi7GcpRdzU13tJAnOC87I9uFgnE9Y-ccKXya0Gl2aBG0pvx8C9cln0bM-OTqnXNnFP2s-PiCCwGxvNoY-H9uTqqQGLjwnZNXXd3Gmzzfno6QXvd8YQ__"
              }
              alt="Plates_TEst"
            />
          </div>
        </div>
        <div className="w-[2px] bg-[#D9D9D9] h-full" />
        <div className="flex flex-col items-center gap-[20px] h-full">
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
        </div>
        <div className="w-[2px] bg-[#D9D9D9] h-full" />
        <div className="flex flex-row items-end gap-[25px] h-full flex-grow ">
          <div>
            <div className="flex flex-row gap-[5px]">
              <div className="shadow-lg">
                <button className="font-[karla] text-white font-bold bg-[#456779] rounded-[5px] px-[9px] py-[4px] shadow-lg">
                  Add
                </button>
              </div>
              <div className="shadow-lg">
                <button className="font-[karla] text-white font-bold bg-[#36695C] rounded-[5px] px-[9px] py-[4px] shadow-lg">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="w-[31px]" onClick={handleToggle}>
          <img src={DropdownCloseIcon} alt="dropdown_arrow_main" />
        </button>
      </div>
      {/* <div className="h-[2px] w-full bg-black absolute"></div> */}
      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-1 flex justify-center">
            <span className=" font-[karla] text-[20px] text-black">
              Picture
            </span>
          </div>
          <div className="col-span-2 flex justify-center">
            <span className=" font-[karla] text-[20px] text-black">Name</span>
          </div>
          <div className="col-span-2 flex justify-center">
            <span className=" font-[karla] text-[20px] text-black">
              Config-ID
            </span>
          </div>
          <div className="col-span-2 flex justify-center">
            <span className=" font-[karla] text-[20px] text-black">
              Function
            </span>
          </div>
          <div className="col-span-2 flex justify-center">
            <span className=" font-[karla] text-[20px] text-black">
              Quantity
            </span>
          </div>
        </div>
        <div className="mt-[10px]">
          <div
            className="rounded-[5px] border border-solid border-black grid grid-cols-10 auto-cols-min gap-[5px] items-center col-span-3 bg-[#F6F6F6] px-[15px] py-[5px]"
          >
            <div className="col-span-1 auto-cols-max text-ellipsis h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
              <h1 className="w-full font-[karla] font-medium text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                Kaschmir-Plate
              </h1>
            </div>
            <div className="col-span-2 auto-cols-max text-ellipsis h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
              <h1 className="w-full font-[karla] font-medium text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                12345
              </h1>
            </div>
            <div className="col-span-2 auto-cols-max text-ellipsis h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
              <h1 className="w-full font-[karla] font-medium text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                23,3 m
              </h1>
            </div>
            <div className="col-span-2 auto-cols-max text-ellipsis h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
              <h1 className="w-full font-[karla] font-medium text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                233 mm
              </h1>
            </div>
            <div className="col-span-2 auto-cols-max text-ellipsis h-[30px] px-[10px] py-[3px] border border-solid border-black rounded-[3px]">
              <h1 className="w-full font-[karla] font-medium text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                144 mm
              </h1>
            </div>
            <div className="col-span-1 flex flex-start justify-end">
              <img className="h-[34px]" src={DeleteIcon} alt="Delete Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
