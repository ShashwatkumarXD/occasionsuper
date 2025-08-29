import React from 'react'
import { Search} from "lucide-react";

function SearchBar() {
    return (
        <div className="w-3/5 flex items-center bg-white shadow-md rounded-xl px-4 py-3 gap-3 w-full max-w-lg border border-gray-200">
            <Search className="w-5 h-5 text-gray-400" />
            <input
                type="text"
                placeholder="Describe your dream event..."
                className="flex-1 outline-none text-gray-700"
            />
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-[#E69B83] text-white font-medium">
                AI Search
            </button>
        </div>
    )
}

export default SearchBar
