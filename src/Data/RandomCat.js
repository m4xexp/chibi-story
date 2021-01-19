import React, { useState, useEffect } from "react";
import LoadingAni from "../static/animation/Loading";

function RandomCat() {
  const axios = require("axios").default;
  const [ranCat, setRanCat] = useState("");
  const [Loading, setLoading] = useState(undefined);
  const [Done, setDone] = useState(undefined);

  const options = {
    method: "GET",
    url: "https://aws.random.cat/meow",
  };

  const getCat = async () => {
    try {
      setDone(false);
      setLoading(true);
      const resp = await axios.request(options);
      setRanCat(resp.data);
      setTimeout(() => {
        setDone(true);
        setLoading(false);
      }, 2000);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <section className="blog py-14 bg-white font-kanit" id="randomCat">
      <div className="container max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl m-10">
          <span className="block">Random Cat!!</span>
          <span className="block xl:inline" id="">
            Enjoy the best moment!
          </span>
        </h1>
        <ul className="py-10 px-12 flex flex-col justify-center items-center">
          <li
            className={`shadow-sm rounded-sm  ${
              Loading ? "shadow-none rounded-none" : ""
            }  `}
          >
            <figure className="" style={{ width: 300 + "px" }}>
              {Done ? (
                <img
                  src={!Loading ? ranCat.file : " "}
                  alt=""
                  className="w-full object-cover"
                />
              ) : (
                <LoadingAni w={300} h={300} />
              )}
            </figure>
          </li>
          <li>
            <button
              onClick={getCat}
              className="focus:outline-none text-yellow-200 hover:text-white w-52 h-20 bg-transparent border-solid border-4 border-yellow-200 hover:bg-yellow-200 transition-all ease-in-out rounded mt-10"
            >
              <a className="font-bold">Random!</a>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RandomCat;
