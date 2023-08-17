import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdClose} from "react-icons/io";

import { FavoriteContext } from "../contexts/FavoritosContext";

const FavoriteItem = ({ item }) => {
  const { removeFavorite} = useContext(FavoriteContext);
  // destructure item
  const { id, title, image} = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFavorite(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;