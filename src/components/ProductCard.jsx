import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/product/" + product.id)}
      className="border border-[#EEEEEE] p-[15px] text-center bg-[#EEEEEE] rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
    >
      <ProductImage image={product.image} name={product.name} />
      <ProductName name={product.name} />
      <ProductPrice oldPrice={product.oldPrice} newPrice={product.newPrice} />
    </div>
  );
}


function ProductImage({ image, name }) {
  return (
    <div className="w-full h-[350px] overflow-hidden mb-[10px]">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
  );
}

function ProductName({ name }) {
  return (
    <p className="font-semibold text-[15px] text-gray-800 mb-1">{name}</p>
  );
}

function ProductPrice({ oldPrice, newPrice }) {
  return (
    <p>
      {oldPrice && (
        <span className="line-through text-gray-400 mr-[10px]">Rs. {oldPrice}</span>
      )}
      <span className="text-red-600">Rs. {newPrice}</span>
    </p>
  );
}

export default ProductCard;
