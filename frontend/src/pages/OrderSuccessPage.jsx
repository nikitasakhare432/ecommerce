import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { Lottie } from "lottie-react"; // Updated import
import animationData from "../Assests/animations/107043-success.json";

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}  // Directly passing animationData to Lottie
        loop={false}                  // Set loop to false
        autoplay={true}               // Set autoplay to true
        style={{ width: 300, height: 300 }} // Inline style for setting width and height
      />
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
