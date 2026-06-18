import React, { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import DropdownMenu from "../pages/DropdownMenu";
import CartIcon from "./CartIcon";
import SearchBar from "./SearchBar";
import CartSidebar from "./CartSidebar";
import { useCart } from "../context/CartContext";

const seasonItems = [
  { label: "Shalwar Kameez", path: "/season-sale" },
  { label: "Formal Coat", path: "/season-sale" },
  { label: "Jeans", path: "/season-sale" },
  { label: "Waist Coat", path: "/season-sale" },
];

const newArrivalItems = [
  { label: "Polo Shirt", path: "/new-arrival" },
  { label: "Casual Shirt", path: "/new-arrival" },
  { label: "Trouser", path: "/new-arrival" },
  { label: "Shorts", path: "/new-arrival" },
];


const accessoriesItems = [
  { label: "Caps", path: null },
  { label: "Belts", path: null },
  { label: "Wallets", path: null },
  { label: "Watches", path: null },
];

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <nav className="h-[80px] flex items-center justify-between px-[30px] bg-[#1F6F5F] sticky top-0 z-[1000]">
        <Logo size="60px" />
        <NavLinks
          seasonItems={seasonItems}
          newArrivalItems={newArrivalItems}
          accessoriesItems={accessoriesItems}
        />
        <NavActions
          totalItems={totalItems}
          onSearchClick={() => setShowSearch(true)}
          onCartClick={() => setShowSidebar(true)}
        />
      </nav>

      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
      {showSidebar && <CartSidebar onClose={() => setShowSidebar(false)} />}
    </>
  );
}

function NavLinks({ seasonItems, newArrivalItems, accessoriesItems }) {
  return (
    <div className="flex gap-[40px] items-center">
      <NavLink to="/" label="Home" />
      <DropdownMenu label="Season Sale" items={seasonItems} />
      <DropdownMenu label="New Arrival" items={newArrivalItems} />
      <DropdownMenu label="Accessories" items={accessoriesItems} noLinks={true} />
    </div>
  );
}

function NavActions({ totalItems, onSearchClick, onCartClick }) {
  return (
    <div className="flex items-center gap-2">
      <SearchIconButton onClick={onSearchClick} />
      <CartIcon totalItems={totalItems} onClick={onCartClick} />
    </div>
  );
}

function SearchIconButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border-none text-[#EEEEEE] text-[20px] cursor-pointer p-2 hover:text-[#6FCF97] transition-colors duration-200"
    >
      <i className="fa-solid fa-magnifying-glass" />
    </button>
  );
}

export default Navbar;
