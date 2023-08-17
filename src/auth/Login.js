import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { db } from '../components/API';

export function Login() {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const Log = async(e) => {
        const data = {
            user : user,
            pass: pass
        }
        const res = await axios.post(`${db}/`, data);
        console.log(res);

       if(res.data.msg === "Ok"){
            Cookies.set('Session_Event', res.data.usr);
            console.log(res.data.usr)
            navigate('/');
        }
        else{
            toast("User not found", {type: "error" });
        }
    };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-11/12 max-w-[500px] px-7 py-10 rounded-3xl bg-white border-2 border-gray-400'>
        <div className='flex justify-center items-center'>
          <img
            className='max-h-[200px]'
            src="./Nombre_auto.png"
            alt="Nombre"
          />
        </div>
        <div className='mt-6'>
          <div className='flex flex-col'>
            <label className='text-lg font-medium text-[#003F5A]'>Correo Electrónico</label>
            <input onChange={(e) => setUser(e.target.value)} type="text" id="name"
                        className='w-full border-2 border-[#007A7A] rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Ingresa tu correo electrónico" required=""
                    />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium text-[#003F5A]'>Contraseña</label>
                    <input onChange={(e) => setPass(e.target.value)} id="pass"
                        className='w-full border-2 border-[#007A7A] rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Ingresa tu contraseña"
                        type={"password"} required=""
                    />
                </div>
                <div className='mt-6 flex justify-between items-center'>
                    <button className='font-medium text-base text-[#DE6600]'>¿Olvidaste tu contraseña?</button>
                </div>
                <div className='mt-6 flex flex-col gap-y-4'>
                <button onClick={() => Log()} type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-[#DE6600] rounded-xl text-white font-bold text-lg'>Iniciar sesión</button>
                </div>
                <div className='mt-6 flex justify-center items-center'>
                    <p className='font-medium text-base'>¿No tienes una cuenta?</p>
                    <a href='/Signup' className='ml-2 font-medium text-base text-[#DE6600]'>Registrarse</a>
                </div>
            </div>
        </div>
        </div>
    )

}