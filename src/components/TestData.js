import React from "react";
import axios from "axios";

function TestData() {
  axios({
    method: "get",
    url: "http://localhost:5000/story",
  })
    .then((res) => {
      console.log("response", res);
      //
    })
    .catch((err) => {
      console.error(err);
    });

  return <div className="shadow-lg bg-black text-white w-auto h-20"></div>;
}

export default TestData;
