import React, { useContext } from "react";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import FavoriteItem from "../components/FavoriteItem";
import { FSidebarContext } from "../contexts/FSidebarContext";
import { FavoriteContext } from "../contexts/FavoritosContext";

const Favorite = () => {
  const { abrir, handleClose } = useContext(FSidebarContext);
  const { favorite, clearFavorites} = useContext(FavoriteContext);


  return (
    <div
      className={`${
        abrir ? "right-0" : "-right-full"
      } "w-full bg-white fixed top-0 h-5/6 shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Favoritos</div>
        <div
          onClick={handleClose}
          className="cursor-poniter w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {favorite.map((item) => {
          return <FavoriteItem item={item} key={item.ID} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3  mt-2">
        <div className="flex w-full justify-between items-center">
          {/* clear cart icon */}
          <div
            onClick={clearFavorites}
            className="cursor-pointer py-4 bg-red-500 text-white w-screen h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
