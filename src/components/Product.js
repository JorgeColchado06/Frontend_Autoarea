import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {FaHeart } from 'react-icons/fa';

import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { FavoriteContext } from "../contexts/FavoritosContext";

const IconComponent = ({ active }) => {
  return active ? <FaHeart className="text-red-500" /> : <FaHeart className="text-white" />;
};



const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [active, setActive] = useState(false);
  const {addFavorite, removeFavorite } = useContext(FavoriteContext);

  const handleIconClick = () => {
    setActive(!active);
  };


  // destructure product
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center rounded-full items-center text-white w-12 h-12 bg-[#003F5A]">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white rounded-full flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>

          <button onClick={() => {
          handleIconClick();
          if (!active) {
           addFavorite(product, id);
           } else {
           removeFavorite(id);
             }
            }}>
  <div className="flex justify-center rounded-full items-center text-white w-12 h-12 bg-[#DE6600]">
    <IconComponent active={active} />
  </div>
</button>

        </div>
      </div>
      {/* category, title & price */}
      <div>
        <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <h2 className="font-semibbold">$ {price}</h2>
      </div>
    </div>
  );
};

export default Product;
