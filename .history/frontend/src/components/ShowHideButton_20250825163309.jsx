import React from "react";
import { Eye, EyeOff } from "lucide-react";

function ShowHideButton({ show, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="absolute right-2 top-2/3 transform -translate-y-1/2 text-gray-400 hover:text-white"
    >
      {show ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  );
}

export default ShowHideButton;
