import React, { useState, useEffect, useRef } from "react";
import { FaCar } from "react-icons/fa";
import axios from 'axios';
import { db } from '../components/API';
import Cookies from 'js-cookie';

const AggAuto = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  const [año, setAño] = useState("");
  const [mod, setMod] = useState("");
  const [mar, setMar] = useState("");

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

  const handleSubmit = async (e) => {
    const res = await axios.post(`${db}/vehicle`, {
      name: mod,
      year: año,
      branch: mar
    });
    const data = res.data;
    console.log(data);
    const id = Cookies.get('Session_Event');

    const response = await axios.post(`${db}/own`,{
      id_u: id,
      id_v: data.id
    });
    const info = response.data;
    console.log(info);
  };

  return (
    <div>
      <div className="cursor-pointer flex items-center " onClick={toggleForm}>
        <FaCar size={24} /> <p className="ml-2">Agregar vehículo</p>
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div ref={formRef} onSubmit={handleSubmit} className="bg-white p-4 rounded w-11/12 max-w-[600px]">
            <div>  
              <p>Agregue su vehículo para obtener un ajuste exacto.</p>
            </div>
            <div className="mb-4 mt-4">
              <input
                value={año}
                onChange={(e) => setAño(e.target.value)}
                type="text"
                placeholder="Año"
                className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                value={mar}
                onChange={(e) => setMar(e.target.value)}
                type="text"
                placeholder="Marca"
                className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                value={mod}
                onChange={(e) => setMod(e.target.value)}
                type="text"
                placeholder="Modelo"
                className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
              />
            </div>
            {/* Agregar otros campos según sea necesario */}
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="bg-[#DE6600] hover:bg-[#de6800d0] text-white px-4 py-2 rounded"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AggAuto;