import React from "react";
import Banner from "../components/Banner";
import FeatureProject from "../components/FeatureProject";
function Home() {
  return (
    <div className="pt-16 max-w-5xl m-auto font-code">
      <Banner />
      <div className="max-h-fit py-5">
        <div>
          <h1 className="text-4xl py-5 font-semibold">Featured projects</h1>
          <p>A collection of some side projects that have shipped recently.</p>
        </div>
        <div className="py-5 flex flex-col gap-2">
          <FeatureProject />
          <FeatureProject />
        </div>
      </div>
    </div>
  );
}

export default Home;
