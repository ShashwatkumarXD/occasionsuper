import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ location, eventType });
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row items-center gap-3 bg-white shadow-md rounded-2xl p-4 w-full max-w-4xl ring-1 ring-gray-300"
    >
      {/* Location Input */}
      <input
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full  px-4 py-2 rounded-xl border border-gray-400 focus:ring-1 focus:ring-orange-500 focus:outline-none"
      />

      {/* Event Type Input */}
      <input
        type="text"
        placeholder="Enter event type..."
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
        className="w-full  px-4 py-2 rounded-xl border border-gray-400 focus:ring-1 focus:ring-orange-500 focus:outline-none"
      />

      {/* Search Button */}
      {/* <button
        type="submit"
        // className="flex text-lg items-center gap-2 bg-global-gradient text-white px-5 py-2 rounded-xl hover:!bg-white hover:text-orange-500 transition shadow-md w-full md:w-auto justify-center hover:cursor-pointer"
        className="flex items-center gap-2 bg-global-gradient text-white font-medium text-xl p-2 rounded-xl shadow-md border-2 border-transparent hover:bg-white hover:text-global-gradient hover:border-orange-600 transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
      >
        <Search size={18} className="text-white hover:text-orange-500"/>
        Search
      </button> */}
      <button
        type="submit"
        className="group flex items-center gap-2 bg-global-gradient text-white font-medium text-xl p-2 rounded-xl outline outline-transparent hover:bg-white hover:text-global-gradient hover:outline-orange-600 hover:scale-105 transition-transform duration-300 ease-linear cursor-pointer"
      >
        <Search size={18} className="text-white group-hover:text-orange-500 transition-colors group-hover:shadow group-hover:shadow-orange-500  duration-300 ease-in-out" />
        Search
      </button>

    </form>
  );
};

export default SearchBar;
