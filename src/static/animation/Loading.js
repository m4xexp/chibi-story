import React from "react";
import Lottie from "react-lottie";
import * as catAgentData from "../animation/6890-cat-agent-007.json";
import * as doneData from "../animation/676-done.json";

console.log(catAgentData.default);

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: catAgentData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const doneOptions = {
  loop: true,
  autoplay: true,
  animationData: doneData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Loading() {
  return <Lottie options={loadingOptions} height={300} width={300} />;
}

export default Loading;
