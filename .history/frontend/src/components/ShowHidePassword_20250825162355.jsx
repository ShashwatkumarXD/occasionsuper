import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // you can install: npm install lucide-react

function ShowHidePassword({ label, name, value, onChange, required }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <label className="block mb-1">{label}</label>
      <input
        type={show ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 border border-purple-500 rounded bg-black text-white pr-10"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-9 transform -translate-y-1/2 text-gray-400 hover:text-white"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}

export default ShowHidePassword;
