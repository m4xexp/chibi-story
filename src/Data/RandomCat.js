import React, { useState, useEffect } from "react";
import lottie from "lottie-web";
function RandomCat() {
  const axios = require("axios").default;
  const [ranCat, setRanCat] = useState("");

  const options = {
    method: "GET",
    url: "https://aws.random.cat/meow",
  };

  const getCat = async () => {
    try {
      const resp = await axios.request(options);
      setRanCat(resp.data);
      console.log("Cat here", ranCat);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  useEffect(() => {
      lottie.loadAnimation({
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: require('../static/animation/6890-cat-agent-007.json')
      })
    getCat();
  }, []);

  return (
    <section className="blog py-14 bg-white font-kanit" id="randomCat">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl m-10">
          <span className="block">Random Cat!!</span>
          <span className="block xl:inline" id="">
            Enjoy the best moment!
          </span>
        </h1>
        <ul className="py-10 px-12 flex flex-col justify-center items-center">
          <li className="shadow-sm rounded-sm">
            <figure className="h-auto w-80">
              <img src={ranCat.file} alt="" className="w-auto" />
            </figure>
          </li>
          <li>
            <button onClick={getCat} className="text-yellow-200 hover:text-white w-52 h-20 bg-transparent border-solid border-2 border-yellow-200 hover:bg-yellow-200 transition-all ease-in-out rounded mt-10">
              <a className="font-bold">
                Random!
              </a>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RandomCat;
