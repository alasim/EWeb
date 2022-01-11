import Image from "next/image";
import { Fragment, useState } from "react";

export function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    console.log("toggling.....");

    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      <div className="flex justify-between px-4 py-2 text-white bg-blue-900">
        <h1>LOGO</h1>
        <div
          className={
            toggleMenu
              ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
              : "hidden md:flex"
          }
          id="menu"
        >
          <ul>
            <li className="px-3 py-2 border-b cursor-pointer md:inline-block hover:text-gray-500 md:border-none">
              Home
            </li>
            <li className="relative px-3 py-2 border-b cursor-pointer dropdown md:inline-block hover:text-gray-500 md:border-none">
              <a>Products</a>
            </li>
            <li className="px-3 py-2 border-b cursor-pointer md:inline-block hover:text-gray-500 md:border-none">
              AboutUs
            </li>
            <li className="px-3 py-2 border-b cursor-pointer md:inline-block hover:text-gray-500 md:border-none">
              ContactUs
            </li>
          </ul>
        </div>
        <div className="cursor-pointer md:hidden">
          <input className="hidden menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="relative block px-2 py-4 cursor-pointer select-none menu-icon md:hidden"
            htmlFor="menu-btn"
          >
            <span
              onClick={handleToggle}
              onMouseEnter={() => {
                console.log("MouseEnter.....");
              }}
              onMouseLeave={() => {
                "MouseLeave.....";
              }}
              className="relative flex items-center navicon bg-white-darkest"
            ></span>
          </label>
        </div>
      </div>
    </header>
  );
}
