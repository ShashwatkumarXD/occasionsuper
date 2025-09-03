import React, { useState } from "react";
import { CheckCircle, Shield } from "lucide-react";
import ServiceCard from "../components/Card";
import SearchBar from "../components/SearchBar";

const Services = () => {
    const [price, setPrice] = useState(0);
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
                    <span className="font-medium">OccasionSuper</span>
                </p>

                {/* Search Bar */}
                <div className="w-3/4 text-center mx-auto mt-8">
                    <SearchBar searchPlaceholder="Search Services" />
                </div>
            </div>

            {/* ===== 2. Layout ===== */}
            <div className="grid grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="col-span-1 flex flex-col gap-6">
                    {/* Categories */}
                    <div className="bg-white shadow rounded-2xl p-5">
                        <h2 className="font-bold text-xl mb-3">Categories</h2>
                        <ul className="mx-4 text-lg space-y-3 text-gray-700 font-semibold">
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className={`cursor-pointer transition ${selected === category
                                        ? "text-global rounded-xl px-2 py-1 bg-[#efe3df]"
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
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="font-semibold text-lg">Price Range</h2>
                            <span className="text-gray-700 font-medium">
                                ₹{price.toLocaleString()}
                            </span>
                        </div>

                        <input
                            type="range"
                            min="0"
                            max="500000"
                            step={5000}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full accent-[#c16a4d]"
                        />
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                            <span>₹0</span>
                            <span>₹500000</span>
                        </div>
                    </div>

                    {/* Sort */}
                    <div className="bg-white shadow rounded-2xl p-5 space-y-6">
                        <div>
                            <h2 className="font-semibold text-lg mb-3">Sort By</h2>
                            <select className="w-full rounded-lg p-2 outline-2 outline-[#E69B83]">
                                <option>Most Popular</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Guarantee */}
                    <div className="bg-white shadow rounded-2xl p-5 space-y-6">
                        <div>
                            <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-green-600" />
                                OccasionSuper Guarantee
                            </h2>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    Quality assured services
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    Transparent pricing
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    24/7 support
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    Money-back guarantee
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
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
