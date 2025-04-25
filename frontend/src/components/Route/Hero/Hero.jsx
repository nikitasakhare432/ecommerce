import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat flex justify-end items-center`} // <-- align to right
      style={{
        backgroundImage:
          "url(https://thumbs.dreamstime.com/b/delivery-grocery-shopping-healthy-food-background-vegan-vegetarian-paper-bag-vegetables-fruits-nuts-grains-green-copy-178150218.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] text-right`}>  {/* <-- align text right */}
        <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#ffff] font-[600] capitalize`}>
          Fresh Groceries Delivered <br /> Right to Your Doorstep
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#f3f3f3]">
          From farm-fresh fruits to everyday essentials — shop from a wide range <br />
          of groceries at the best prices. Hassle-free delivery, just a click away!
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Groceries
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
