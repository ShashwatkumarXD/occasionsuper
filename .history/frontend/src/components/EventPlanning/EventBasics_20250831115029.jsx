// import React from "react";
// import {
//   Heart,
//   Cake,
//   Building2,
//   Gift,
//   Baby,
//   Palette,
// } from "lucide-react";

// const EventBasics = ({ formData, setFormData }) => {
//   const eventTypes = [
//     { name: "Wedding", icon: Heart },
//     { name: "Birthday Party", icon: Cake },
//     { name: "Corporate Event", icon: Building2 },
//     { name: "Anniversary", icon: Gift },
//     { name: "Baby Shower", icon: Baby },
//     { name: "Theme Party", icon: Palette },
//   ];

//   return (
//     <div className="bg-white rounded-2xl mt-4 p-3">
//       <h2 className="text-2xl font-bold text-center">Event Basics</h2>
//       <p className="text-center text-gray-500">Tell us about your event</p>

//       {/* Event Type Selection */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8    ">
//         {eventTypes.map(({ name, icon: Icon }) => (
//           <button
//             key={name}
//             onClick={() => setFormData({ ...formData, eventType: name })}
//             className={`cursor-pointer border rounded-xl px-1 py-5 flex flex-col items-center justify-center transition ${
//               formData.eventType === name
//                 ? "border-2 border-[#E69B83] bg-orange-50 text-orange-500"
//                 : "border-gray-300 hover:border-2 hover:border-[#E69B83]"
//             }`}
//           >
//             <Icon className="w-6 h-6 mb-2" />
//             <span>{name}</span>
//           </button>
//         ))}
//       </div>

//       {/* Event Date & City */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//         <div>
//           <label className="block text-lg font-medium mb-1">Event Date</label>
//           <input
//             type="date"
//             value={formData.date}
//             onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//             className="w-full outline-1 rounded-lg p-2 focus:outline-2 focus:outline-[#E69B83]"
//           />
//         </div>
//         <div>
//           <label className="block text-lg font-medium mb-1">City</label>
//           <input
//             type="text"
//             placeholder="Select your city"
//             value={formData.city}
//             onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//             className="w-full outline-1 rounded-lg p-2 focus:outline-2 focus:outline-[#E69B83]"
//           />
//         </div>
//       </div>

//       {/* Guest Count */}
//       <div>
//         <label className="block text-lg font-medium mt-6 mb-1">
//           Expected Guest Count: {formData.guests}
//         </label>
//         <input
//           type="range"
//           min="10"
//           max="500"
//           value={formData.guests}
//           onChange={(e) =>
//             setFormData({ ...formData, guests: e.target.value })
//           }
//           className="w-full accent-[#c16a4d]"
//         />
//         <div className="flex justify-between font-semibold text-sm text-gray-500">
//           <span>10</span>
//           <span>500+</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventBasics;


import React, { useState } from "react";
import {
  Heart,
  Cake,
  Building2,
  Gift,
  Baby,
  Palette,
} from "lucide-react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const EventBasics = ({ formData, setFormData }) => {
  const eventTypes = [
    { name: "Wedding", icon: Heart },
    { name: "Birthday Party", icon: Cake },
    { name: "Corporate Event", icon: Building2 },
    { name: "Anniversary", icon: Gift },
    { name: "Baby Shower", icon: Baby },
    { name: "Theme Party", icon: Palette },
  ];

  const [cityOptions, setCityOptions] = useState([]);

  // Fetch cities from OpenStreetMap API
  const fetchCities = async (query) => {
    if (!query) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${query}&format=json&limit=5`
      );
      const data = await res.json();
      const cities = data.map((item) => item.display_name);
      setCityOptions(cities);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  return (
    <div className="bg-white rounded-2xl mt-4 p-3">
      <h2 className="text-2xl font-bold text-center">Event Basics</h2>
      <p className="text-center text-gray-500">Tell us about your event</p>

      {/* Event Type Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {eventTypes.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setFormData({ ...formData, eventType: name })}
            className={`cursor-pointer border rounded-xl px-1 py-5 flex flex-col items-center justify-center transition ${
              formData.eventType === name
                ? "border-2 border-[#E69B83] bg-orange-50 text-orange-500"
                : "border-gray-300 hover:border-2 hover:border-[#E69B83]"
            }`}
          >
            <Icon className="w-6 h-6 mb-2" />
            <span>{name}</span>
          </button>
        ))}
      </div>

      {/* Event Date & City */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <label className="block text-lg font-medium mb-1">Event Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full outline-1 rounded-lg p-2 focus:outline-2 focus:outline-[#E69B83]"
          />
        </div>

        {/* City Autocomplete */}
        <div>
          <label className="block text-lg font-medium mb-1">City</label>
          <Autocomplete
            freeSolo
            options={cityOptions}
            value={formData.city || ""}
            onInputChange={(e, newValue) => {
              setFormData({ ...formData, city: newValue });
              fetchCities(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Type your city"
                className="bg-white rounded-lg"
              />
            )}
          />
        </div>
      </div>

      {/* Guest Count */}
      <div>
        <label className="block text-lg font-medium mt-6 mb-1">
          Expected Guest Count: {formData.guests}
        </label>
        <input
          type="range"
          min="10"
          max="500"
          value={formData.guests}
          onChange={(e) =>
            setFormData({ ...formData, guests: e.target.value })
          }
          className="w-full accent-[#c16a4d]"
        />
        <div className="flex justify-between font-semibold text-sm text-gray-500">
          <span>10</span>
          <span>500+</span>
        </div>
      </div>
    </div>
  );
};

export default EventBasics;
