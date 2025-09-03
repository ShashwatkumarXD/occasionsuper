import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* 1. Header */}
      <div className="bg-white shadow rounded-xl p-6 mb-6 text-center">
        <h1 className="text-3xl font-bold">OccasionSuper Services</h1>
        <p className="text-gray-600 mt-2">
          Discover our complete range of premium event services, all managed by OccasionSuper
        </p>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search services..."
            className="w-1/2 px-4 py-2 border rounded-l-lg focus:outline-none"
          />
          <button className="px-4 py-2 bg-orange-100 border rounded-r-lg text-orange-600">
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-1 flex flex-col gap-6">
          {/* 2. Categories */}
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="font-semibold mb-2">Categories</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="text-orange-600 font-medium">All Services</li>
              <li>Weddings</li>
              <li>Birthday</li>
              <li>Corporate</li>
              <li>Anniversary</li>
              <li>Baby Shower</li>
              <li>Theme Parties</li>
            </ul>
          </div>

          {/* 3. Sort + Guarantee */}
          <div className="bg-white shadow rounded-xl p-4 space-y-4">
            <div>
              <h2 className="font-semibold mb-2">Sort By</h2>
              <select className="w-full border rounded p-2">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            <div>
              <h2 className="font-semibold mb-2">OccasionSuper Guarantee</h2>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✔ Quality assured services</li>
                <li>✔ Transparent pricing</li>
                <li>✔ 24/7 support</li>
                <li>✔ Money-back guarantee</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Main Content */}
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-6">
            {/* Example Service Card */}
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Corporate Buffet"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Corporate Grand Buffet</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Impress your corporate guests with a lavish multi-cuisine buffet.
                </p>
                <p className="text-orange-600 font-bold mt-2">₹950</p>
                <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>

            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Kids Birthday"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Kids Birthday Bash Decor</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Make your child’s birthday unforgettable with vibrant decor.
                </p>
                <p className="text-orange-600 font-bold mt-2">₹18,500</p>
                <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
