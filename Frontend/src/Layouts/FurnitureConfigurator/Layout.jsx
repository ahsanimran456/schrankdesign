import "../FurnitureConfigurator/layout.style.css";
import { HiOutlineSearch } from "react-icons/hi";
import PlatesIcon from '../../../public/images/furniture_configurator/plates.png'
import EdgeIcon from '../../../public/images/furniture_configurator/edge.png'
import AssetsIcon from '../../../public/images/furniture_configurator/assets.png'
import CalculationIcon from '../../../public/images/furniture_configurator/calculation.png'
import PartListIcon from '../../../public/images/furniture_configurator/part-list.png'
import SettingsIcon from '../../../public/images/furniture_configurator/settings.png'
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";


const LOGO_URL =
  "https://s3-alpha-sig.figma.com/img/ec45/2773/15ef3fa355ab889b5b292adf38a0ed22?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=okMNrX9rqUgRqNJE96ePUo1G1oNfbMG~V59UnT7-prsYWap7hpwGhD9AkB3n9m-moJJ0rCIZoE7lPzJ3fH-4cRId1TcNHZP1XoDUrjsZVd5j-v8GWBpe5J2ExWqO9YtKu8MIQNuOrHBlrc1OR4AbBOl9xIfxWBVTXvMvk7EFeN-likm-iYracSxK1yMoNBuURHg~KmbUFMLFqvqMsCJoJ4Rjvz-lY7-B9Zmk-HuZAkSURMyjXb8NHmc7OFIm5R1SPoghD7~NUKTXPlnhkTAd0SP3iShj5WGT6I6~402Kth1mdfSRZ3QgT7RXF5BkMR9tegtIjItExvWWfn5GbpJXrQ__";
const DP =
  "https://s3-alpha-sig.figma.com/img/dbaa/367a/f5c9da24af11e6cbec0f946555d713c2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fxXx2S6byF0pRA6M3sSs6uLMB3auud-qQFp~cFz5NOqARs4-C6F5H2r5qKuhHyKDl369PLuhqR0TFFuUaPqNOygEEgWPyX40t-WABNG9COCFrtOyES~q0vzAVcqumcCUYHIx2IWxSo~kLbEFslEcLdX~lkiyL~GiwGMyk~pqincmz5XUK-LF2y1-6QvPcJHzoukshcAk97o8-P-sHG7IZ3DRh--4~gUEg78~00AFJ-vSOj64PH90dnx1ZRjn85d-GjEsucOefnAleUhCjI0xeGKQDOKZVCq-uGxOAY2fNvP2TI8jHUG1-CB7w~Cqt1Aw5GYqGlZPC0eCA~oXDW32lA__";

const Layout = ({ children }) => {

  const location = useLocation();
  const tempArr = location.pathname.split("/");
  const activePage = tempArr[tempArr.length - 2];
  const navigate = useNavigate();
  const sidebarNavigation = [
    {
      icon: PlatesIcon, label: "Plates"
    },
    {
      icon: EdgeIcon, label: "Edge"
    },
    {
      icon: AssetsIcon, label: "Assets"
    },
    {
      icon: CalculationIcon, label: "Calculation"
    },
    {
      icon: PartListIcon, label: "Part-List"
    },
    {
      icon: SettingsIcon, label: "Settings"
    },
  ]

  const HandleTabs = (route) => {
    switch (route) {
      case "Plates":
        navigate("/dashboard/furniture-configurator/plates/home");
        break;
      case "Edge":
        navigate("/dashboard/furniture-configurator/edge/home");
        break;
      case "Assets":
        navigate("/dashboard/furniture-configurator/drawer/home");
        break;
      case "Calculation":
        navigate("/dashboard/furniture-configurator/calculation/home");
        break;
      case "Part-List":
        navigate("/dashboard/furniture-configurator/part-list/home");
        break;
      case "Settings":
        navigate("/dashboard/furniture-configurator/edge/home");
        break;
      default:
      // Default action if none of the above matches
    }
  }

  // const [selected,] = useState(0);

  return (
    <div>
      <div className="relative w-full h-[103px] bg-[#E5E5E5] flex flex-row justify-between items-center px-[34px]">
        <div className="w-fit">
          <img src={LOGO_URL} alt="LOGO" className="w-[331px]" />
        </div>
        <div className="absolute flex flex-col items-center left-1/2 transform -translate-x-1/2 top-0">
          <div className="flex flex-row items-center gap-[5px] px-[26px] w-fit bg-[#D9D9D9] rounded-br-[35px] rounded-bl-[35px] py-[6px]">
            <svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5856 13.4622C12.4479 13.4177 11.5775 13.0304 12.1214 11.398H12.1136C13.5312 9.95639 14.6146 7.6366 14.6146 5.35271C14.6146 1.84096 12.2495 0 9.50087 0C6.75046 0 4.39841 1.8401 4.39841 5.35271C4.39841 7.646 5.47571 9.9752 6.90201 11.4134C7.45798 12.8534 6.46381 13.3878 6.25597 13.4622C3.37739 14.4908 0 16.3643 0 18.2138V18.9072C0 21.4271 4.94831 22 9.52771 22C14.114 22 19 21.4271 19 18.9072V18.2138C19 16.3087 15.6062 14.4498 12.5856 13.4622ZM7.80871 20.9089C7.80871 18.7294 9.21422 15.7871 9.21422 15.7871L8.2417 15.0338C8.2417 14.3138 9.5 13.5605 9.5 13.5605C9.5 13.5605 10.7548 14.3258 10.7548 15.0338L9.78578 15.7871C9.78578 15.7871 11.1913 18.7183 11.1913 20.9329C11.1913 21.28 7.80871 21.1997 7.80871 20.9089Z"
                fill="#FD3E32"
              />
            </svg>
            <p className="font-[karla] text-[19px] font-[800] text-[#456779] leading-[22px]">Admin-Konfigurator</p>
          </div>
          <div className="flex flex-row items-center justify-between pr-[6px] mt-[21px] bg-white border border-solid border-black rounded-[5px] w-[344px]">
            <input placeholder="search..." className="outline-none rounded-[5px] px-[16px] font-[karla] font-[800] text-[19px] placeholder:text-[#8D8686]" />
            <HiOutlineSearch className="text-[20px]" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={DP} alt="DP" className="w-[67px] h-[67px] rounded-full" />
          <p className="font-[karla]">Dennis</p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[221px] bg-[#D9D9D9] flex flex-col gap-[10px] sidebar-height py-[28px] px-[18px]">
          {
            sidebarNavigation.map((item, index) => {
              return (
                <button key={index} className={`flex flex-row gap-[17px] hover:bg-white/50 items-center py-[5px] pl-[10px] rounded-[10px] ${activePage === item.label.toLowerCase() ? 'bg-white' : ''}`} onClick={() => HandleTabs(item.label)}>
                  <img className="w-[16px] h-[16px]" src={item.icon} alt={item.label} />
                  <p className="font-[karla] font-medium text-[24px] leading-[28px]">{item.label}</p>
                </button>
              )
            })
          }
        </div>
        <div className="bg-[#F0EFEF] sidebar-height layout-children-width">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
