import React from "react";
import BookPic from "../../../src/assets/hero-book.png"

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-[80vh] max-w-[1200px] mx-auto rounded-xl mt-12  p-8 md:p-20">
      <div className="hero-content flex-col lg:flex-row-reverse  gap-20 items-center">
        <img
          src={BookPic}
          className=" "
        />
        <div className="space-y-8 text-center lg:text-left">
          <h1 className=" text-4xl md:text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
