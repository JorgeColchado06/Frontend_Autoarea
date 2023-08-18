import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserProfile = () => {
  const initialUser = {
    name: "Nombre del Usuario",
    phone: "123-456-7890",
    email: "usuario@example.com",
    address: "Calle Principal 123",
    zipCode: "12345",
    password: "********", // Contraseña ficticia por seguridad
    creditCard: {
      cardNumber: "**** **** **** 1234",
      expirationDate: "12/25",
      cvv: "***",
    },
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingCreditCard, setIsEditingCreditCard] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditCreditCardClick = () => {
    setIsEditingCreditCard(true);
  };

  const handleSaveClick = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en el backend
    setIsEditing(false);
    setIsEditingCreditCard(false);
  };

  const handleInputChange = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleCreditCardChange = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      creditCard: {
        ...prevUser.creditCard,
        [field]: value,
      },
    }));
  };

  return (
    <div>
      <Header />
      <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto mt-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Perfil de Usuario</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Mis Datos</h2>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mb-2"
                  />
                  <input
                    type="text"
                    value={user.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </>
              ) : (
                <>
                  <p><strong>Nombre:</strong> {user.name}</p>
                  <p><strong>Número Telefónico:</strong> {user.phone}</p>
                </>
              )}
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Correo Electrónico</h2>
              {isEditing ? (
                <input
                  type="text"
                  value={user.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              ) : (
                <p><strong>Correo Electrónico:</strong> {user.email}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Dirección</h2>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={user.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="mb-2"
                  />
                  <input
                    type="text"
                    value={user.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  />
                </>
              ) : (
                <>
                  <p><strong>Dirección:</strong> {user.address}</p>
                  <p><strong>ZIP:</strong> {user.zipCode}</p>
                </>
              )}
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Contraseña</h2>
              {isEditing ? (
                <input
                  type="password"
                  value={user.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                />
              ) : (
                <p><strong>Contraseña:</strong> {user.password}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Tarjeta de Crédito</h2>
              {isEditingCreditCard ? (
                <>
                  <input
                    type="text"
                    value={user.creditCard.cardNumber}
                    onChange={(e) =>
                      handleCreditCardChange("cardNumber", e.target.value)
                    }
                    className="mb-2"
                  />
                  <input
                    type="text"
                    value={user.creditCard.expirationDate}
                    onChange={(e) =>
                      handleCreditCardChange("expirationDate", e.target.value)
                    }
                    className="mb-2"
                  />
                  <input
                    type="text"
                    value={user.creditCard.cvv}
                    onChange={(e) =>
                      handleCreditCardChange("cvv", e.target.value)
                    }
                  />
                </>
              ) : (
                <>
                  <p><strong>Número de Tarjeta:</strong> {user.creditCard.cardNumber}</p>
                  <p><strong>Fecha de Expiración:</strong> {user.creditCard.expirationDate}</p>
                  <p><strong>CVV:</strong> {user.creditCard.cvv}</p>
                </>
              )}
            </div>
          </div>
          <div className="mt-4">
            {isEditing || isEditingCreditCard ? (
              <button
                onClick={handleSaveClick}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Guardar Cambios
              </button>
            ) : (
              <>
                <button
                  onClick={handleEditClick}
                  className="bg-[#DE6600] hover:bg-[#de6800a7] text-white px-4 py-2 rounded"
                >
                  Editar Información
                </button>
                <button
                  onClick={handleEditCreditCardClick}
                  className="bg-[#DE6600] hover:bg-[#de6800a7] text-white px-4 py-2 rounded ml-2"
                >
                  Editar Tarjeta de Crédito
                </button>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserProfile;
