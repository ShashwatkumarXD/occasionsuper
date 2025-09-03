import React from "react";

const Quote = ({ text }) => {
  return (
    <div className="p-10 flex justify-center items-center h-fit">
      <h1 className="text-center text-3xl md:text-2xl font-semibold text-global-gradient leading-relaxed">
        {text}
      </h1>
    </div>
  );
};

export default Quote;
