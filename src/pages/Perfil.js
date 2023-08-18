import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserProfile = () => {
  const user = {
    name: "Nombre del Usuario",
    phone: "123-456-7890",
    email: "usuario@example.com",
    address: "Calle Principal 123",
    zipCode: "12345",
    password: "********", // Contraseña ficticia por seguridad
  };

  return (
    <div>
      <Header />
      <section className=" pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto mt-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Perfil de Usuario</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Mis Datos</h2>
              <p><strong>Nombre:</strong> {user.name}</p>
              <p><strong>Número Telefónico:</strong> {user.phone}</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Correo Electrónico</h2>
              <p><strong>Correo Electrónico:</strong> {user.email}</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Dirección</h2>
              <p><strong>Dirección:</strong> {user.address}</p>
              <p><strong>ZIP:</strong> {user.zipCode}</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Contraseña</h2>
              <p><strong>Contraseña:</strong> {user.password}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserProfile;

