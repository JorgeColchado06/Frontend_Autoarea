import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Simular sugerencias de autocompletado
    const mockSuggestions = [
      "Apple",
      "Banana",
      "Cherry",
      "Grapes",
      "Orange",
      "Pineapple",
      "Strawberry",
      "Watermelon",
    ];

    // Filtrar sugerencias basadas en el término de búsqueda
    const filteredSuggestions = mockSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="mr-96 flex items-center w-full relative">
      <input
        type="text"
        placeholder="Buscar..."
        className="py-2 px-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={searchTerm}
        onChange={handleSearch}
      />

      <button
        className="ml-2 bg-[#DE6600] text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={() => alert(`Buscar: ${searchTerm}`)}
      >
        <FaSearch className="text-lg" />
      </button>

      {suggestions.length > 0 && searchTerm && (
        <ul className="absolute left-0 w-full mt-80 bg-white border border-gray-300 rounded-md shadow-md">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setSearchTerm(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

