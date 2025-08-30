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
      <button
        type="submit"
        className="flex items-center gap-2 bg-global-gradient  text-white px-5 py-2 rounded-xl hover:text-global-gradient hover:bg-white hover:border hover:border-orange-500 transition shadow-md w-full md:w-auto justify-center hover:cursor-pointer"
      >
        <Search size={18} className="hover:text-global-gradient"/>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
