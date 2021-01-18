import React from "react";
import { Link } from "react-scroll";

function Dropdown(props) {
  const { isOpen, toggle } = props;

  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-gray-100"
          : "hidden"
      }
      onClick={toggle}
    >
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
        to="blog"
        className="p-4 cursor-pointer hover:bg-gray-100 transition-all ease-in-out"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Blog
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
  );
}

export default Dropdown;
