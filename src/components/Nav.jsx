import { headerLogo } from "../assets/images";

import { navLinks } from "../constants";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";

const Nav = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-monserrat leading-normal text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block md:hidden ">
          {!nav ? (
            <AiOutlineClose size={20} className="cursor-pointer" />
          ) : (
            <RxHamburgerMenu size={20} className="cursor-pointer" />
          )}
        </div>
        {/* <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </div> */}
        <div
          className={
            !nav
              ? `fixed left-0 top-0 w-[60%] h-screen border-r border-r-slate-gray-100 bg-pale-blue z-auto ease-in-out duration-500 block md:hidden`
              : `fixed left-[-100%] `
          }
        >
          <ul className="px">
            {navLinks.map((item) => (
              <li key={item.label} className="p-3">
                <a
                  href={item.href}
                  className="font-monserrat leading-normal text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
