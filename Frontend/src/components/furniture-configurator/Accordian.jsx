import { Collapse } from "@material-tailwind/react"
import { useState , Children, isValidElement, cloneElement} from "react";


const Accordian = ({beforeCollapse, afterCollapse}) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    };

    const afterCollapseWithProps = Children.map(afterCollapse, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { handleToggle });
        }
        return child;
    })

    const beforeCollapseWithProps = Children.map(beforeCollapse, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { handleToggle });
        }
        return child;
    })

  return (
    <div className="overflow-auto">
          <Collapse className="" onAnimationComplete={() => console.log("closed")} open={open}>
            <div className="pl-[35px] overflow-auto h-full flex items-center shadow-md bg-white border-2 border-solid border-[#d9d9d9] rounded-[12px]">
              {afterCollapseWithProps}
            </div>
          </Collapse>
          {!open && (
            <div className="pl-[35px] overflow-auto shadow-md flex items-center bg-white w-full h-[80px] border-2 border-solid border-[#d9d9d9] rounded-[12px]">
              {beforeCollapseWithProps}
            </div>
          )}
    </div>
  )
}

export default Accordian