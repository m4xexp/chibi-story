import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Nav(props) {
  const { toggle } = props;

  return (
    <nav className="flex justify-between h-32 shadow items-center">
      <Link to="/" className="pl-8 font-extrabold cursor-pointer">
        chibli gallery.
      </Link>
      <div className="px-4 md:hidden cursor-pointer">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
            onClick={toggle}
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link
          to="#"
          className="p-4 cursor-pointer hover:bg-gray-100 transition-all ease-in-out"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="about"
          className="p-4 cursor-pointer hover:bg-gray-100 transition-all ease-in-out"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
        <Link
          to="gallery"
          className="p-4 cursor-pointer hover:bg-gray-100 transition-all ease-in-out"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Gallery
        </Link>
        <Link
          to="contact"
          className="p-4 cursor-pointer hover:bg-gray-100 transition-all ease-in-out"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
