import React from "react";

function ChibliCard(props) {
  const { chibli, onChibliClick } = props;

  return (
    <li className="bg-white text-black hover:shadow-lg rounded transition-all ease-in-out delay-100 items-center flex flex-col justify-center">
      <img
        src={chibli.thumbnailUrl}
        alt=""
        className="rounded-md"
        onClick={() => {
          onChibliClick(chibli);
        }}
      />
      <h2 className="m-6">{chibli.title}</h2>
    </li>
  );
}

export default ChibliCard;
