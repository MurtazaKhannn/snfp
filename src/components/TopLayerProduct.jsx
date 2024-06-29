import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const TopLayerProduct = (props) => {
  const product = props.product;
  // console.log(props);

  return (
    <>
      <div className="flex items-center ml-8 mt-7 mb-2 font-bebas text-lg">
        <p className="">Home </p>
        <span className="text-[#403B58]">
          <IoIosArrowForward />
        </span>
        <p className="">Shop</p>
        <span className="text-[#403B58]">
          <IoIosArrowForward />
        </span>
        <span className="">{product.category} </span>
        <span className="text-[#403B58]">
          <IoIosArrowForward />
        </span>
        <span className="">{product.name}</span>
      </div>
    </>
  );
};

export default TopLayerProduct;
