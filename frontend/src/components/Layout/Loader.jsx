import React from "react";
import { Lottie } from "lottie-react";
import animationData from "../../Assests/animations/24151-ecommerce-animation.json";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Lottie
        animationData={animationData}  // Directly passing animationData to Lottie
        loop={true}                   // Set loop to true
        autoplay={true}               // Set autoplay to true
        style={{ width: 300, height: 300 }} // Inline style for setting width and height
      />
    </div>
  );
};

export default Loader;
