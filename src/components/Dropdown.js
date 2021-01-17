import React from "react";

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
      <a href="#" className="p-4">
        Home
      </a>
      <a href="#about" className="p-4">
        About
      </a>
      <a href="#gallery" className="p-4">
        Images
      </a>
      <a href="#contact" className="p-4">
        Contact
      </a>
    </div>
  );
}

export default Dropdown;
