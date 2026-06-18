import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import SeasonSalePage from "./pages/SeasonSalePage";
import NewArrivalPage from "./pages/NewArrivalPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import products from "./data/products";

function App() {
  // Filter products by category here and pass as props to pages
  const seasonProducts = products.filter(function (p) {
    return p.category === "season";
  });

  const newProducts = products.filter(function (p) {
    return p.category === "new";
  });

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <main>
          <Routes>
            {/* Pass filtered products as props to pages */}
            <Route
              path="/"
              element={
                <HomePage
                  seasonProducts={seasonProducts}
                  newProducts={newProducts}
                />
              }
            />
            <Route
              path="/season-sale"
              element={<SeasonSalePage products={seasonProducts} />}
            />
            <Route
              path="/new-arrival"
              element={<NewArrivalPage products={newProducts} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetailPage products={products} />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
