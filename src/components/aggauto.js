import React, { useState, useEffect, useRef } from "react";
import { FaCar } from "react-icons/fa";

const AggAuto = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío del formulario
  };

  return (
    <div>
      <div className="cursor-pointer flex items-center " onClick={toggleForm}>
        <FaCar size={24} /> <p className="ml-2">Agregar vehículo</p>
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-4 rounded w-11/12 max-w-[600px]">
            <div>  
              <p>Agregue su vehículo para obtener un ajuste exacto.</p>
            </div>
            <div className="mb-4 mt-4">
              <input
                type="text"
                placeholder="Año"
                className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Marca"
                className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Modelo"
                className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
              />
            </div>
            {/* Agregar otros campos según sea necesario */}
            <button
              type="submit"
              className="bg-[#DE6600] hover:bg-[#de6800d0] text-white px-4 py-2 rounded"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AggAuto;
