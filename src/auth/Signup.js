import React, {useState} from 'react'
import { db } from '../components/API'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export function Signup() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const Signin = async() => {
        const res = await axios.post(`${db}/signup`, {
            name:name,
            pass:pass
        });
        Cookies.set('Session_Event', res.data.id);
        console.log(res.data.id)
        navigate('/');
    }

  return (
<div className='bg-[#a7a7a7]'>
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
            <input value={name} type="text" onChange={(e) =>setName(e.target.value)} id="email" 
                        className='w-full border-2 border-[#007A7A] rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Ingresa tu correo electrónico" required=""
                    />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium text-[#003F5A]'>Crea tu Contraseña</label>
                    <input value={pass} id="password" onChange={(e) => setPass(e.target.value)}
                        className='w-full border-2 border-[#007A7A] rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Al menos 8 caracteres"
                        type={"password"} required=""
                    />
                </div>
                <div className='mt-6 flex justify-between items-center'>
                </div>
                <div className='mt-6 flex flex-col gap-y-4'>
                <button type="submit" onClick={() => Signin()} className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-[#DE6600] rounded-xl text-white font-bold text-lg'>Crear Cuenta</button>
                    <button 
                        className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 '>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.77356 7.61497C4.26889 5.64403 5.79416 4.23865 8 4.23865C9.25618 4.23865 10.3507 4.72794 11.1954 5.55053L13.6696 3.29106C11.7339 2.02885 9.40049 1.23865 8 1.23865C4.02233 1.23865 0.842332 3.85859 0.133409 7.21607L3.77356 7.61497Z" fill="#EA4335"/>
                                <path d="M11.7501 14.1537C11.0977 14.6009 10.2803 14.8542 9.37007 14.8542C7.20366 14.8542 5.36078 13.1746 4.80824 10.9956L0.134704 11.2287C0.838107 15.5843 4.74374 18.8542 9.37007 18.8542C11.6487 18.8542 13.7316 17.8375 15.0656 16.3396L11.7501 14.1537Z" fill="#34A853"/>
                                <path d="M15.0672 16.3314C16.476 15.2896 17.3047 13.8761 17.3047 12C17.3047 11.3034 17.2036 10.6444 17.0233 10H9.37004V13.9157H14.746C14.5279 14.6194 14.0637 15.1423 13.2226 15.9649L15.0672 16.3314Z" fill="#4A90E2"/>
                                <path d="M4.80828 10.9899C4.53884 10.2767 4.37007 9.51754 4.37007 8.71162C4.37007 7.91776 4.54038 7.15719 4.80769 6.44863L0.133361 7.18372C-0.0638726 8.72889 -0.000288042 10.3956 0 11.9955C0 13.5896 0.0624717 15.2514 0.134839 16.8046L4.80828 10.9899Z" fill="#FBBC05"/>
                            </svg>
                            Iniciar sesión con Google
                    </button>
                </div>
                <div className='mt-6 flex justify-center items-center'>
                    <p className='font-medium text-base'>¿Ya tienes cuenta?</p>
                    <a href='/' className='ml-2 font-medium text-base text-[#DE6600]'>Iniciar Sesion</a>
                </div>
            </div>
        </div>
        </div>
        </div>
    )

}