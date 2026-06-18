import React from "react";
function CartIcon({ totalItems, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border-none text-[#EEEEEE] text-[24px] cursor-pointer relative p-2 hover:text-[#6FCF97] transition-colors duration-200"
    >
      <i className="fa-solid fa-bag-shopping" />
      {totalItems > 0 && <CartBadge count={totalItems} />}
    </button>
  );
}

function CartBadge({ count }) {
  return (
    <span className="absolute top-[-2px] right-[-4px] bg-[#e44d26] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1F6F5F]">
      {count}
    </span>
  );
}

export default CartIcon;
