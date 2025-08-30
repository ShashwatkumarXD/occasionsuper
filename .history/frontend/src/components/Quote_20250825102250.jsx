import React from "react";

const Quote = ({ text }) => {
  return (
    <div className="p-4 flex justify-center items-center h-fit bg-gradient-to-r from-pink-50 via-white to-purple-50">
      <h1 className="text-center text-xl md:text-2xl font-semibold text-black leading-relaxed">
        {text}
      </h1>
    </div>
  );
};

export default Quote;
