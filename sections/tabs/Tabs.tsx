import { useState } from "react";
import {
  BsChevronDown,
  BsFillExclamationCircleFill,
  BsListCheck,
} from "react-icons/bs";
import { classes } from "../../helpers/utils";
import CheckmarkList from "./CheckmarkList";
import SliderTextBlocks from "./SliderTextBlocks";
import TitleWithText from "./TitleWithText";

export default function Tabs() {
  const [active, setactive] = useState(1);
  const [openNav, setopenNav] = useState(false);
  return (
    <div className="py-8 mb-20 text-center h-2/3">
      <h1 className="pt-8 pb-16 text-2xl uppercase md:text-4xl">
        KOMPLETTLÖSUNG: INTERAKTIVER SHOWROOM
      </h1>
      <div className="container w-full h-2/3">
        <div className="flex-col flex mb-10 text-lg font-bold sm:flex-row">
          <div
            onClick={() => setactive(1)}
            className={classes(
              "flex text-xl relative items-center justify-center w-full py-3 space-x-2 cursor-pointer ",
              active == 1 ? "bg-secondary text-white" : "hover:bg-blue-50"
            )}
          >
            <BsListCheck />
            <h3>Features</h3>
            {/* <BsChevronDown className="absolute cursor-pointer hover:scale-110 right-4" /> */}
          </div>

          <div
            onClick={() => setactive(2)}
            className={classes(
              " text-xl flex items-center justify-center w-full py-3 space-x-2 cursor-pointer ",
              active == 2 ? "bg-secondary text-white" : "hover:bg-blue-50"
            )}
          >
            <BsFillExclamationCircleFill />
            <h3>Features</h3>
          </div>
          <div
            onClick={() => setactive(3)}
            className={classes(
              "flex text-xl items-center justify-center w-full py-3 space-x-2 cursor-pointer ",
              active == 3 ? "bg-secondary text-white" : "hover:bg-blue-50"
            )}
          >
            <BsFillExclamationCircleFill />
            <h3>Features</h3>
          </div>
        </div>

        {active == 1 && <CheckmarkList />}
        {active == 2 && <SliderTextBlocks />}
        {active == 3 && <TitleWithText />}
      </div>
    </div>
  );
}
