import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Buttons = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen ? <GrClose /> : <GiHamburgerMenu />}
    </button>
  );
};
export default Buttons;
