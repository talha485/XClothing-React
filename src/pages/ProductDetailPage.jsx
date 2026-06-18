import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartSidebar from "../components/CartSidebar";

function ProductDetailPage({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showSidebar, setShowSidebar] = useState(false);

  const product = products.find(function (p) {
    return p.id === parseInt(id);
  });

  if (!product) {
    return <p className="text-center py-16 text-[18px]">Product not found.</p>;
  }

  function handleAddToCart() {
    addToCart(product);
    setShowSidebar(true);
  }

  return (
    <div className="p-5">
      <BackButton onClick={() => navigate(-1)} />

      <div className="flex gap-[50px] px-[50px] py-[30px] max-w-[1200px] mx-auto">
        <ProductDetailImage image={product.image} name={product.name} />
        <ProductDetailInfo product={product} onAddToCart={handleAddToCart} />
      </div>

      {showSidebar && <CartSidebar onClose={() => setShowSidebar(false)} />}
    </div>
  );
}

function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#6FCF97] text-[#1F6F5F] border-none px-4 py-2 rounded cursor-pointer text-[14px] m-[10px] hover:bg-[#2FA084] hover:text-white transition-all duration-200"
    >
      <i className="fa-solid fa-arrow-left mr-2" />
      Back
    </button>
  );
}

function ProductDetailImage({ image, name }) {
  return (
    <div className="flex-1">
      <img src={image} alt={name} className="w-full rounded-[10px]" />
    </div>
  );
}

function ProductDetailInfo({ product, onAddToCart }) {
  return (
    <div className="flex-1">
      <ProductDetailName name={product.name} />
      <ProductDetailCategory category={product.category} />
      <ProductDetailPrice oldPrice={product.oldPrice} newPrice={product.newPrice} />
      <ProductDetailDescription description={product.description} />
      <AddToCartButton onClick={onAddToCart} />
    </div>
  );
}

function ProductDetailName({ name }) {
  return <p className="text-[28px] font-semibold text-gray-800 mb-2">{name}</p>;
}

function ProductDetailCategory({ category }) {
  return (
    <p className="text-gray-400 mb-4">
      Category: {category === "season" ? "Season Sale" : "New Arrival"}
    </p>
  );
}

function ProductDetailPrice({ oldPrice, newPrice }) {
  return (
    <div className="text-[24px] my-5">
      {oldPrice && (
        <span className="line-through text-gray-400 mr-[10px]">Rs. {oldPrice}</span>
      )}
      <span className="text-red-600">Rs. {newPrice}</span>
    </div>
  );
}

function ProductDetailDescription({ description }) {
  return <p className="text-gray-500 leading-relaxed mb-6">{description}</p>;
}

function AddToCartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-[30px] py-4 w-full bg-[#6FCF97] text-[#1F6F5F] border-none text-[18px] font-semibold rounded cursor-pointer hover:bg-[#2FA084] hover:text-white transition-all duration-300"
    >
      ADD TO CART
    </button>
  );
}

export default ProductDetailPage;
