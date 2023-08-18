import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import PurchasesProvider from "./contexts/PurchasesContext";
import FSidebarProvider from "./contexts/FSidebarContext";
import FavoriteProvider from "./contexts/FavoritosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoriteProvider>
  <FSidebarProvider>
  <SidebarProvider>
    <CartProvider>
      <PurchasesProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
      </PurchasesProvider>
    </CartProvider>
  </SidebarProvider>
  </FSidebarProvider>
  </FavoriteProvider>
);
