import React from "react";
import Lottie from "react-lottie";
import * as skeletonData from "../static/animation/474-skeleton-frame-loading.json";

const blogOptions = {
  loop: true,
  autoplay: true,
  animationData: skeletonData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function skeLoading() {
  return <Lottie options={blogOptions} height={600} width={600} />;
}

export default skeLoading;
