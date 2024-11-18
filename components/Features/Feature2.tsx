import React from "react";
import { FaStar } from "react-icons/fa";
import Button3D from "../Buttons/Button3D";

// Define the product data type
interface Product {
  id: number;
  name: string;
  stock: number;
  reviews: number;
  price: string;
  originalPrice: string;
  discount: string;
  imageUrl: string;
  imageUrl2: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Neon Ninja - Tokyo Nights Tee",
    stock: 100,
    reviews: 5,
    price: "₹1,299",
    originalPrice: "₹2,149",
    discount: "40%",
    imageUrl: "/bg/1.jpg",
    imageUrl2: "/bg/11.jpg",
  },
  {
    id: 2,
    name: "Retro Shuriken T-Shirt - Shadow Clan",
    stock: 75,
    reviews: 6,
    price: "₹1,499",
    originalPrice: "₹2,599",
    discount: "42%",
    imageUrl: "/bg/2.jpg",
    imageUrl2: "/bg/9.jpg",
  },
  {
    id: 3,
    name: "Mountain Samurai - Journey Tee",
    stock: 50,
    reviews: 5,
    price: "₹1,199",
    originalPrice: "₹1,999",
    discount: "40%",
    imageUrl: "/bg/3.jpg",
    imageUrl2: "/bg/8.jpg",
  },
  {
    id: 4,
    name: "Sunset Horizon - Mystic Spirits Tee",
    stock: 60,
    reviews: 5,
    price: "₹999",
    originalPrice: "₹1,599",
    discount: "38%",
    imageUrl: "/bg/4.jpg",
    imageUrl2: "/bg/7.jpg",
  },

];

const Feature2 = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex md:flex-col flex-row items-center p-2 border rounded-md pb-6"
        >
          <div
            className="soda w-full "
            style={
              {
                "--url": `url(${product.imageUrl})`, // First dynamic background URL
                "--url2": `url(${product.imageUrl2})`, // Second dynamic background URL (for hover)
              } as React.CSSProperties
            }
          ></div>
          <div className="flex flex-col items-center">
            <h1 className="font-semibold md:text-lg  mt-2">{product.name}</h1>
            <p className="md:text-sm text-xs text-gray-600">
              {product.stock} Stock available
            </p>
            <div className="flex items-center mt-2">
              <button className="bg-green-500 text-xs text-white px-2 py-1 rounded-lg flex items-center">
                <span className="mr-2">4.2</span>
                <FaStar />
              </button>
              <span className="ml-2 text-sm md:text-base">
                ({product.reviews} Reviews)
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <p className="font-semibold md:text-xl text-lg">
                {product.price}
              </p>
              <p className="md:text-xl text-base text-gray-500 line-through">
                {product.originalPrice}
              </p>
              <p className="md:text-sm text-xs w-max text-red-600">
                {product.discount} off
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature2;
