import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";

import Logo from "../assets/logo.png";
import Buttons from "./Buttons";

const Navbar = () => {
  // change navbar on scroll
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // toggle open and close btn
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full fixed  top-0 left-0 z-10 h-14 ${
        isScrolled > 0 ? "bg-colorWhite z-10 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="md:flex container items-center justify-between py-3 md:px10">
        <Link to="/">
          <img
            src={Logo}
            alt="Company's Logo"
            className="w-10 cursor-pointer"
          />
        </Link>
        {/* imported button component */}
        {/* passed the state value as a prop */}
        <Buttons isOpen={isOpen} setIsOpen={setIsOpen} />
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-colorWhite md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-20" : "top-[-490px]"
          }`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index} className="md:ml-8 text=xl md:my-0 my-7">
                <NavLink
                  to={path}
                  className="text-gray-800 hover:text-colorPrimary
                duration-500 font-semibold"
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
