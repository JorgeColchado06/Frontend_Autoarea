import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from "./auth/Login";
import { Signup } from "./auth/Signup";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { ProtectedRoute } from './components/protectedRoute';
import Sidebar from "./components/Sidebar";
import Favorite from "./components/Favoritos";
import Perfil from "./pages/Perfil";

import Cookies from 'js-cookie';


const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
          <Route element={<ProtectedRoute session={Cookies.get("Session_Event")}/>}>

          </Route>
        </Routes>
        <Favorite />
        <Sidebar />
      </Router>
    </div>
  );
};

export default App;
