import React, { createContext, useState} from "react";

export const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {

    const [favorite, setFavorite] = useState([]);

    
  const addFavorite = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is already in the cart
    const favoriteItem = favorite.find((item) => {
      return item.id === id;
    });
    if (favoriteItem) {
      const newFavorite = [...favorite].map((item) => {
        if (item.id === id) {
          return { ...item};
        } else return item;
      });
      setFavorite(newFavorite);
    } else {
      setFavorite([...favorite, newItem]);
    }
  };

    // remove from favorites
    const removeFavorite = (id) => {
        const newFavorite = favorite.filter((item) => {
            return item.ID !== id;
        });
        setFavorite(newFavorite);
        }

    // clear favorites
    const clearFavorites = () => {
        setFavorite([]);
    }

    return (
        <FavoriteContext.Provider
          value={{
            favorite,
            addFavorite,
            removeFavorite,
            clearFavorites,
          }}
        >
          {children}
        </FavoriteContext.Provider>
      );
}

export default FavoriteProvider;