import React, { useState, useEffect, useRef } from "react";
import { FaCar } from "react-icons/fa";
import Select from "react-select";

const options1 = [
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    // Agrega más opciones aquí
  ];
  
  const options2 = [
    { value: "Toyota", label: "Toyota" },
    { value: "Honda", label: "Honda" },
    { value: "Ford", label: "Ford" },
    // Agrega más opciones aquí
  ];
  
  const options3 = [
    { value: "Corolla", label: "Corolla" },
    { value: "Civic", label: "Civic" },
    { value: "Mustang", label: "Mustang" },
    // Agrega más opciones aquí
  ];

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
        <FaCar size={24} /> <p className="ml-2">Agregra vehiculo</p>
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-4 rounded w-11/12 max-w-[600px]">
            <div>  
            <p>Agregue su vehículo para obtener un ajuste exacto.</p>
            </div>
            <div className="mb-4 mt-4">
              <Select
                options={options1}
                isSearchable
                placeholder="Año"
              />
            </div>
            <div className="mb-4">
              <Select
                options={options2}
                isSearchable
                placeholder="Marca"
              />
            </div>
            <div className="mb-4">
              <Select
                options={options3}
                isSearchable
                placeholder="Modelo"
              />
            </div>
            {/* Agregar otros campos según sea necesario */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
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
