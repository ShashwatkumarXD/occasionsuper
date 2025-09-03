import React, { useState } from "react";
import ServiceCard from "../components/Card";
import SearchBar from "../components/SearchBar";

const Services = () => {
    const [price, setPrice] = useState(500000);
    const [selected, setSelected] = useState("All Services");

    const categories = [
        "All Services",
        "Weddings",
        "Birthday",
        "Corporate",
        "Anniversary",
        "Baby Shower",
        "Theme Parties",
    ];

    const services = [
        {
            id: 1,
            title: "Corporate Grand Buffet (Per Plate)",
            description:
                "Impress your corporate guests with a lavish multi-cuisine buffet. Perfect for office parties, conferences.",
            price: 950,
            rating: 4.8,
            image: "https://via.placeholder.com/400x200", // replace with real img
        },
        {
            id: 2,
            title: "Kids Birthday Bash Decor",
            description:
                "Make your child’s birthday unforgettable with our vibrant balloon and theme decor.",
            price: 18500,
            rating: 4.8,
            image: "https://via.placeholder.com/400x200", // replace with real img
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
            {/* ===== 1. Header ===== */}
            <div className="text-center mb-10">
                <div className="inline-block text-md bg-orange-50 text-orange-600 px-4 py-2 rounded-full font-medium mb-2 shadow-sm">
                    👑 Premium Services
                </div>
                <h1 className="text-4xl font-extrabold text-gray-800">
                    OccasionSuper Services
                </h1>
                <p className="text-gray-600 text-lg mt-4">
                    Discover our complete range of premium event services, all managed by{" "}
                    <span className="font-medium ">OccasionSuper</span>
                </p>

                {/* Search Bar */}
                {/* <div className="flex justify-center mt-6">
                    <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden w-2/3 max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search services..."
                            className="w-full px-4 py-3 focus:outline-none"
                        />
                        <button className="flex items-center gap-2 px-5 py-3 bg-orange-50 text-orange-600 hover:bg-orange-100 transition">
                            <span>⚙</span> Filters
                        </button>
                    </div>
                </div> */}
                <div className="w-3/4 text-center mx-auto mt-8">
                    <SearchBar searchPlaceholder="Search Services" />
                </div>

            </div>

            <div className="grid grid-cols-4 gap-8">
                {/* ===== 2 + 3. Sidebar ===== */}
                <div className="col-span-1 flex flex-col gap-6">
                    {/* Categories */}
                    {/* <div className="bg-white shadow rounded-2xl p-5">
                        <h2 className="font-semibold text-lg mb-3">Categories</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="text-orange-600 font-medium cursor-pointer">
                                All Services
                            </li>
                            <li className="cursor-pointer hover:text-orange-600">Weddings</li>
                            <li className="cursor-pointer hover:text-orange-600">Birthday</li>
                            <li className="cursor-pointer hover:text-orange-600">Corporate</li>
                            <li className="cursor-pointer hover:text-orange-600">Anniversary</li>
                            <li className="cursor-pointer hover:text-orange-600">Baby Shower</li>
                            <li className="cursor-pointer hover:text-orange-600">Theme Parties</li>
                        </ul>
                    </div> */}

                    <div className="bg-white shadow rounded-2xl p-5">
                        <h2 className="font-semibold text-lg mb-3">Categories</h2>
                        <ul className="mx-4 text-lg space-y-3 text-gray-700 font-semibold">
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className={`cursor-pointer transition ${selected === category
                                            ? "text-global bg-[#E69B83]"
                                            : "hover:text-orange-600"
                                        }`}
                                    onClick={() => setSelected(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Range */}
                    <div className="bg-white shadow rounded-2xl p-5">
                        <h2 className="font-semibold text-lg mb-3">Price Range</h2>
                        <input
                            type="range"
                            min="0"
                            max="500000"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full accent-orange-500"
                        />
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                            <span>₹0</span>
                            <span>₹{price.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Sort + Guarantee */}
                    <div className="bg-white shadow rounded-2xl p-5 space-y-6">
                        <div>
                            <h2 className="font-semibold text-lg mb-3">Sort By</h2>
                            <select className="w-full border rounded-lg p-2 focus:outline-orange-400">
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Rating</option>
                            </select>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg mb-3">OccasionSuper Guarantee</h2>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>✔ Quality assured services</li>
                                <li>✔ Transparent pricing</li>
                                <li>✔ 24/7 support</li>
                                <li>✔ Money-back guarantee</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ===== 4. Main Content ===== */}
                <div className="col-span-3">
                    <div className="grid grid-cols-2 gap-6">
                        {services.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
