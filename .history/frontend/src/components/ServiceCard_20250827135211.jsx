import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

function ServiceCard({ image, title, subtitle, description }) {
    return (
        <div className="bg-white rounded-2xl outline-1 outline-[#E69B83] overflow-hidden hover:outline-2 hover:outline-[#E69B83] hover:shadow-lg hover:shadow-[#E69B83] transition-all duration-300 ease-linear">
            {/* Image Section */}
            <div className="relative">
                <img src={image} alt={title} className="w-full h-52 object-cover" />
                <span className="absolute top-3 right-3 bg-white px-3 py-1 text-sm rounded-full shadow">
                    Premium
                </span>
            </div>

            {/* Text Section */}
            {/* <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500 text-sm mb-2">{subtitle}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="flex justify-between items-center text-sm font-medium text-orange-600">
          <span className="flex items-center gap-1">
            ✔ Quality Assured
          </span>
          <span className="text-xl">➝</span>
        </div>
      </div> */}

            <div className="p-5 flex flex-col gap-3">
                <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{subtitle}</p>
                    <p className="text-gray-600 text-sm">{description}</p>
                </div>

                <div className="flex items-center justify-between w-full max-w-md p-4 border-2">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-primary" />
                        <span className="text-lg font-medium">Quality Assured</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-primary" />
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
