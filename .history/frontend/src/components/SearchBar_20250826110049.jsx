// import React, { useState } from "react";
// import { Search } from "lucide-react";

// const SearchBar = ({ onSearch }) => {
//   const [category, setCategory] = useState("event");
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (onSearch) { 
//       onSearch({ category, query });
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSearch}
//       className="flex flex-col md:flex-row items-center gap-3 bg-white shadow-md rounded-2xl p-4 w-[140%] max-w-4xl"
//     >
//       {/* Dropdown */}
//       <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         className="px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
//       >
//         <option value="event">Event Type</option>
//         <option value="city">City</option>
//         <option value="services">Services</option>
//       </select>

//       {/* Input */}
//       <input
//         type="text"
//         placeholder={`Search by ${category}...`}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
//       />

//       {/* Button */}
//       <button
//         type="submit"
//         className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-xl hover:bg-pink-600 transition shadow-md"
//       >
//         <Search size={18} />
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchBar;


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
      className="flex flex-col md:flex-row items-center gap-3 bg-white shadow-md rounded-2xl p-4 w-full max-w-4xl"
    >
      {/* Location Input */}
      <input
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full  px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
      />

      {/* Event Type Input */}
      <input
        type="text"
        placeholder="Enter event type..."
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
        className="w-full  px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-pink-600 transition shadow-md w-full md:w-auto justify-center hover:cursor-pointer"
      >
        <Search size={18} />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
