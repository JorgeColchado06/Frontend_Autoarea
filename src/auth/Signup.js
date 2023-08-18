import React, {useState} from 'react'
import { db } from '../components/API'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export function Signup() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const Signin = async() => {
        const res = await axios.post(`${db}/signup`, {
            name:name,
            street: street,
            ZIP: zip,
            email: email,
            pass: pass,
            phone: phone
        });
        Cookies.set('Session_Event', res.data.id);
        console.log(res.data.id)
        navigate('/');
    }

    return (
      <div className="min-h-screen py-40"
      style={{
        backgroundImage: `url('/Tienda BG.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('images/Register-Background.png')" }}>
              <img src="/Icono_AA-removebg-preview.png" alt="Icono"/>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Registrate</h2>
              <p className="mb-4 font-medium text-base">
              Crea tu cuenta. Es gratis y solo toma un minuto
              </p>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <input value={name} type="text" onChange={(e) =>setName(e.target.value)} placeholder="Name" className="border border-gray-400 py-1 px-2"/>
                  <input value={phone} type="text" onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="border border-gray-400 py-1 px-2"/>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <input value={street} type="text" onChange={(e) =>setStreet(e.target.value)} placeholder="Street" className="border border-gray-400 py-1 px-2"/>
                  <input value={zip} type="text" placeholder="ZIP" onChange={(e) => setZip(e.target.value)} className="border border-gray-400 py-1 px-2"/>
                </div>
                <div className="mt-5">
                  <input value={email} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border border-gray-400 py-1 px-2 w-full"/>
                </div>
                <div className="mt-5">
                  <input value={pass} id='password' onChange={(e) => setPass(e.target.value)} type='password' placeholder="Password" className="border border-gray-400 py-1 px-2 w-full"/>
                </div>
                <div className="mt-5">
                </div>
                <div className="mt-5">
                  <button onClick={() => Signin()} type="submit" className="w-full bg-[#DE6600] py-3 text-center text-white">Registrarse</button>
                </div>
                <div className='mt-5'>
                <p className='font-medium text-base'>¿Ya tienes una cuenta? <a href='/Login' className='font-medium text-base text-[#DE6600]'>Iniciar Sesion</a> </p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }