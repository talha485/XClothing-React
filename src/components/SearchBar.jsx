import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";


function SearchBar({ onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(function () {
    inputRef.current.focus();
  }, []);


  useEffect(function () {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return function () { document.removeEventListener("keydown", handleKey); };
  }, [onClose]);

  useEffect(function () {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = products.filter(function (p) {
        return p.name.toLowerCase().includes(query.toLowerCase());
      });
      setResults(filtered);
    }
  }, [query]);

  function handleResultClick(productId) {
    onClose();
    navigate("/product/" + productId);
  }

  return (
    <div
      onClick={function (e) { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 bg-black/60 z-[2000] flex justify-center pt-[100px]"
    >
      <div className="bg-white w-[600px] max-w-[92vw] rounded-xl overflow-hidden h-fit shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        <SearchInput inputRef={inputRef} query={query} onChange={setQuery} onClose={onClose} />
        <SearchResults query={query} results={results} onResultClick={handleResultClick} />
      </div>
    </div>
  );
}

function SearchInput({ inputRef, query, onChange, onClose }) {
  return (
    <div className="flex items-center px-5 py-4 gap-3 border-b border-gray-100">
      <i className="fa-solid fa-magnifying-glass text-gray-400 text-[18px]" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={function (e) { onChange(e.target.value); }}
        className="flex-1 border-none outline-none text-[16px] text-gray-700"
      />
      <CloseButton onClick={onClose} />
    </div>
  );
}

function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 border-none w-8 h-8 rounded-full cursor-pointer text-[15px] flex items-center justify-center hover:bg-[#e44d26] hover:text-white transition-all duration-200"
    >
      <i className="fa-solid fa-xmark" />
    </button>
  );
}

function SearchResults({ query, results, onResultClick }) {
  if (query.trim() === "") return null;

  if (results.length === 0) {
    return (
      <p className="text-center py-8 px-5 text-gray-400">
        No results found for "<strong>{query}</strong>"
      </p>
    );
  }

  return (
    <div className="max-h-[380px] overflow-y-auto py-2">
      {results.map(function (product) {
        return (
          <SearchResultItem
            key={product.id}
            product={product}
            onClick={() => onResultClick(product.id)}
          />
        );
      })}
    </div>
  );
}

function SearchResultItem({ product, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[14px] px-5 py-3 w-full border-none bg-transparent cursor-pointer text-left hover:bg-gray-50 transition-all duration-150"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-[55px] h-[65px] object-cover rounded-md bg-gray-100 shrink-0"
      />
      <div>
        <p className="font-semibold text-[14px] text-gray-800 mb-1">{product.name}</p>
        <p>
          {product.oldPrice && (
            <del className="text-gray-300 text-[12px] mr-2">Rs. {product.oldPrice}</del>
          )}
          <span className="text-[#e44d26] font-semibold">Rs. {product.newPrice}</span>
        </p>
      </div>
    </button>
  );
}

export default SearchBar;
