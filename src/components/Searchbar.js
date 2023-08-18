import React from "react";
import { FaSearch } from "react-icons/fa"; // Importa FaSearch

const SearchBar = () => {
  return (
    <div className="mr-96 flex items-center w-full">
<input
  type="text"
  placeholder="Buscar..."
  className="py-2 px-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
/>
    

      <button className="ml-2 bg-[#DE6600] text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-blue-300">
        <FaSearch className="text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
