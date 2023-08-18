import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';
import { db } from '../components/API';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {

  //Variables para los datos del usuario
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [st, setSt] = useState("");
  const [zip, setZip] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //Variables para los datos de la tarjeta del usuario
  const [Cname, setCname] = useState("");
  const [num, setNum] = useState("");
  const [ccv, setCcv] = useState("");
  const [date, setDate] = useState("");
  const [resi, setResi] = useState("");
  const [Cdata, setCdata] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingCreditCard, setIsEditingCreditCard] = useState(false);

  //Funcion para obtener la informacion del usuario
  const getData = async () => {
    const id = Cookies.get('Session_Event');
    const res = await axios.get(`${db}/user/${id}`);
    const data = res.data;
    setData(data);
    setName(data.name);
    setPhone(data.phone);
    setEmail(data.email);
    setSt(data.street);
    setZip(data.ZIP);
    setPass(data.password);
    console.log(data);
  }

  const getCards = async () => {
    const id = Cookies.get('Session_Event')
    const res = await axios.get(`${db}/card/${id}`)
    const data = res.data;
    setCdata(data);
    setCname(data.name);
    setNum(data.number);
    setCcv(data.cvv);
    setDate(data.date);
    setResi(data.residence);
  }

  const handleEditClick = () => {
    getData();
    setIsEditing(true);
  };

  const handleEditCreditCardClick = () => {
    setIsEditingCreditCard(true);
  };

  const handleSubmit = async () => {
    const id = Cookies.get('Session_Event');
    const res = await axios.put(`${db}/user/${id}`, {
        name: name,
        phone: phone,
        street: st,
        ZIP: zip,
        email: email,
        pass: pass
    })
    const data = await res.data;
    setData(data);
    console.log(data)

    const response = await axios.put(`${db}/card/${Cdata.id}`, {
      name: Cname,
      number: num,
      cvv: ccv,
      date: date,
      residence: resi,
    })
    const datos = await response.data;
    setCdata(datos);
    navigate('/');
  }


  useEffect(() => {
    getData();
    getCards();
  }, [])

  return (
    <div>
      <Header />
      <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto mt-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Perfil de Usuario</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Mis Datos</h2>
              {isEditing ? (
                <>
                <label><strong>Name </strong></label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-2"
                  />
                  <div>
                  <label><strong>Phone </strong></label>
                  <input
                    placeholder={data.phone}
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  </div>
                </>
              ) : (
                <>
                  <p><strong>Nombre:</strong> {data.name}</p>
                  <p><strong>Número Telefónico:</strong> {data.phone}</p>
                </>
              )}
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Correo Electrónico</h2>
              {isEditing ? (
                <>
                <label><strong>Email </strong></label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                </>
              ) : (
                <p><strong>Correo Electrónico:</strong> {data.email}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Dirección</h2>
              {isEditing ? (
                <>
                <label><strong>Direccion: </strong></label>
                  <input
                    type="text"
                    value={st}
                    onChange={(e) => setSt(e.target.value)}
                    className="mb-2"
                  />
                  <div>
                  <label><strong>ZIP: </strong></label>
                  <input
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                  </div>
                </>
              ) : (
                <>
                  <p><strong>Dirección:</strong> {data.street}</p>
                  <p><strong>ZIP:</strong> {data.ZIP}</p>
                </>
              )}
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Contraseña</h2>
              {isEditing ? (
                <>
                <label><strong>Password: </strong></label>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                </>
              ) : (
                <p><strong>Contraseña:</strong> {data.password}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Tarjeta de Crédito</h2>
              {isEditingCreditCard ? (
                <>
                  <input
                    type="text"
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                    className="mb-2"
                  />
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.date)}
                    className="mb-2"
                  />
                  <input
                    type="text"
                    value={ccv}
                    onChange={(e) => setCcv(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <p><strong>Número de Tarjeta:</strong> {Cdata.number}</p>
                  <p><strong>Fecha de Expiración:</strong> {Cdata.date}</p>
                  <p><strong>CVV:</strong> {Cdata.cvv}</p>
                </>
              )}
            </div>
          </div>
          <div className="mt-4">
            {isEditing || isEditingCreditCard ? (
              <button
                onClick={() => handleSubmit()}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Guardar Cambios
              </button>
            ) : (
              <>
                <button
                  onClick={handleEditClick}
                  className="bg-[#DE6600] hover:bg-[#de6800a7] text-white px-4 py-2 rounded"
                >
                  Editar Información
                </button>
                <button
                  onClick={handleEditCreditCardClick}
                  className="bg-[#DE6600] hover:bg-[#de6800a7] text-white px-4 py-2 rounded ml-2"
                >
                  Editar Tarjeta de Crédito
                </button>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserProfile;
