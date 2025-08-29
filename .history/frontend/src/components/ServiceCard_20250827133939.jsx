import React from "react";

function ServiceCard({ image, title, subtitle, description }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden hover:outline-1 hover:shadow-md hover:shadow-[#E69B83] transition-all duration-300 ease-linear">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <span className="absolute top-3 right-3 bg-white px-3 py-1 text-sm rounded-full shadow">
          Premium
        </span>
      </div>

      {/* Text Section */}
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500 text-sm mb-2">{subtitle}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 flex justify-between items-center text-sm font-medium text-orange-600">
          <span className="flex items-center gap-1">
            ✔ Quality Assured
          </span>
          <span className="text-xl">➝</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
