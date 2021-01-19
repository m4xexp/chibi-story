import React, { useState, useEffect } from "react";

function Movie() {
  const [moviesData, setMoviesData] = useState([]);

  const axios = require("axios").default;

  const options = {
    method: "GET",
    url: "https://simplemovie.p.rapidapi.com/movie/list/recent",
    headers: {
      "x-rapidapi-key": "00fa5bfefbmsh9e02ca58cd933e6p130f37jsn62267c6049a7",
      "x-rapidapi-host": "simplemovie.p.rapidapi.com",
    },
  };

  const sendGetRequest = async () => {
    try {
      const resp = await axios.request(options);
      setMoviesData(resp);
      console.log("Here", moviesData);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return <div className="movies rounded "></div>;
}

export default Movie;
