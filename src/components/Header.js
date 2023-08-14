import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Cookies from 'js-cookie';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [Session, setSession] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const checkCookie = (session) => {
      if (session) {
        // Assuming you have a "navigation" array defined somewhere

        setSession(true);
      }
    };

    const session = Cookies.get("Session_Event");
    checkCookie(session);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  /* This function is the one we call when the "log out" button is pressed */
  const LogOut = () => {
    Cookies.remove("Session_Event");
    setSession(false);
    window.location.reload();
  };

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="w-[100px]">
            <img src="/Icono_AA-removebg-preview.png" alt="" />
          </div>
        </Link>

        {/* Contenedor de los íconos de usuario y carrito de compras */}
        <div className="flex items-center">

          {/* Usuario */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm mr-10">
                <FaUser className="text-2xl" />         
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (

                        
                        Session ? (
                          <button
                            onClick={() => LogOut()}
                            type="submit"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            Log out
                          </button>
                        ) : (
                          <div>
                            <a
                              href="/Login"
                              className={classNames(
                                'bg-gray-100 text-gray-900', 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                            >
                              Login
                            </a>
                            <a
                              href="/Signup"
                              className={classNames(
                                'bg-gray-100 text-gray-900', 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                            >
                              Sign up
                            </a>
                          </div>
                        )
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Carrito de compras */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer relative"
          >
            <FaShoppingCart className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;


