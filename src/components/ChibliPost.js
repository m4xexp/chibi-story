import React from "react";

function ChibliPost(props) {
  const { chibli, onChibliClose } = props;

  return (
    <div className="chibli-post fixed top-0 bottom-0 left-0 right-0 z-999 flex justify-center items-center ">
      <div
        className="chibli-post-bg bg-black bg-opacity-75 top-0 absolute bottom-0 left-0 right-0"
        onClick={onChibliClose}
      />
      <div className="chibli-post-content relative bg-white lg:max-w-screen-md md:max-w-lg sm:max-w-lg rounded p-4">
        <svg
          onClick={onChibliClose}
          className="w-6 h-6 absolute right-0 top-0 transform hover:scale-150 hover:rotate-45 transition-transform cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <img
          src={chibli.thumbnailUrl}
          alt=""
          className="block lg:max-w-lg md:max-w-md ml-auto mr-auto mt-4"
        />
        <h4 className="text-black text-center font-semibold m-6 font-kanit">
          <span>"</span> {chibli.title} <span>"</span>
        </h4>
        <p className="font-kanit text-center font-medium m-4">{chibli.story}</p>
        <p>
          <span className="font-kanit mt-3">ถ่ายเมื่อ</span>{" "}
          <span className="font-kanit">{chibli.date}</span>
        </p>
      </div>
    </div>
  );
}

export default ChibliPost;
