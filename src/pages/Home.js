import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrusel from "../components/Carrusel";
const Home = () => {

  // get products from product context
  const { products } = useContext(ProductContext);

  // get only the products on the filter
  const filteredProducts = products.filter((item) => {
    return (
      item.CATEGORY === "llantas" || item.CATEGORY === "Filtros" || item.CATEGORY === "Luces" || item.CATEGORY === "Empaques"
    );
  });

  return (
    <div>
    <Header />     
      <section className="py-20">
        <div className="container mx-auto">
          <div className="my-10">
          <Carrusel />
          </div>
          
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                <Product product={product} key={product.ID}/>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
};

export default Home;
