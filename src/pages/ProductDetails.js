import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Header from "../components/Header";
import {db} from '../components/API';

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  //const { products } = useContext(ProductContext);
  const [product, setProduct] = useState([]);

  //get the single product based on id
  const fetchProduct = async() => {
    const res = await fetch(`${db}/product/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure product
  const { NAME, PRICE, DESCRIPTION, IMAGE, CATEGORY, SUPPLIER, BRANCH, QUANTITY } = product;
  return (
    <>
          <Header />
    <div>
      <section className="mt-56 pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          {/* image and text wrapper */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img className="max-w-[200px] lg:max-w-xs" src={IMAGE} alt="" />
            </div>
            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{NAME}</h1>
              <div className="text-2xl text-red-500 font-medium mb-6">$ {PRICE}</div>
              <button onClick={()=>addToCart(product, product.id)} className='bg-primary py-4 px-8 text-white'>Add to cart</button>
            </div>
          </div>
          <div className="mt-12 lg:flex lg:space-x-4">
  {/* Especificaciones del producto */}
  <div className="mt-12 ml-48 bg-white border-2 border-gray-400 w-11/12 max-w-[500px]">
    <p className="mb-4 font-bold">ESPECIFICACIONES DEL PRODUCTO:</p>
            <div className="mb-4 bg-gray-200 h-10 max-w-[500px]"><strong>Category: </strong>{CATEGORY}</div>
            <div className="mb-4 h-10 max-w-[500px] "><strong>Supplier: </strong>{SUPPLIER}</div>
            <div className="mb-4 bg-gray-200 h-10 max-w-[500px]"><strong>Branch: </strong>{BRANCH}</div>
            <div className="mb-4 h-10 max-w-[500px]"><strong>Quantity in stock: </strong>{QUANTITY}</div>
  </div>

  {/* Descripción del producto */}
  <div className="w-11/12 max-w-[600px] p-4 mt-12 ml-48 bg-white border-2 border-gray-400">
    <p className=" font-bold">DESCRIPCIÓN DEL PRODUCTO:</p>
    <p className="mb-8">{DESCRIPTION}</p>
  </div>
</div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ProductDetails;