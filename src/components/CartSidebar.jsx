import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartSidebar({ onClose }) {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, totalPrice } = useCart();
  const navigate = useNavigate();

  function handleViewCart() {
    onClose();
    navigate("/cart");
  }

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-[1500]"
      />
      <div className="fixed top-0 right-0 h-full w-[380px] max-w-[95vw] bg-white z-[1600] flex flex-col shadow-[-4px_0_24px_rgba(0,0,0,0.15)]">
        <SidebarHeader onClose={onClose} />
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <EmptyMessage />
          ) : (
            cartItems.map(function (item) {
              return (
                <SidebarItem
                  key={item.id}
                  item={item}
                  onRemove={() => removeFromCart(item.id)}
                  onIncrease={() => increaseQty(item.id)}
                  onDecrease={() => decreaseQty(item.id)}
                />
              );
            })
          )}
        </div>

        {cartItems.length > 0 && (
          <SidebarFooter total={totalPrice} onViewCart={handleViewCart} />
        )}
      </div>
    </>
  );
}

function SidebarHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between px-6 py-5 bg-[#1F6F5F] text-white shrink-0">
      <h2 className="text-[18px] font-semibold flex items-center gap-[10px]">
        <i className="fa-solid fa-bag-shopping" /> Your Cart
      </h2>
      <button
        onClick={onClose}
        className="bg-white/20 border-none text-white w-9 h-9 rounded-full cursor-pointer text-[18px] flex items-center justify-center hover:bg-white/30 transition-all duration-200"
      >
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}

function EmptyMessage() {
  return (
    <div className="text-center pt-16">
      <i className="fa-solid fa-bag-shopping text-[56px] text-gray-200 block mb-4" />
      <p className="text-gray-400 text-[16px]">Your cart is empty</p>
    </div>
  );
}

function SidebarItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="flex gap-3 py-[14px] border-b border-gray-100 items-start">
      <img
        src={item.image}
        alt={item.name}
        className="w-[75px] h-[90px] object-cover rounded-md bg-gray-50 shrink-0"
      />
      <div className="flex-1">
        <p className="font-semibold text-[14px] mb-1 text-gray-800">{item.name}</p>
        <p className="text-[13px] mb-[10px]">
          {item.oldPrice && (
            <del className="text-gray-400 text-[12px] mr-2">Rs. {item.oldPrice}</del>
          )}
          <span className="text-[#e44d26] font-semibold">Rs. {item.newPrice}</span>
        </p>
        <QtyControl
          quantity={item.quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>
      <button
        onClick={onRemove}
        className="bg-transparent border-none cursor-pointer text-gray-300 text-[16px] p-1 hover:text-[#e44d26] transition-colors duration-200"
      >
        <i className="fa-solid fa-trash" />
      </button>
    </div>
  );
}

function QtyControl({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-[10px]">
      <QtyButton icon="minus" onClick={onDecrease} />
      <span className="font-semibold text-[15px] min-w-[20px] text-center">{quantity}</span>
      <QtyButton icon="plus" onClick={onIncrease} />
    </div>
  );
}

function QtyButton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 border-none w-7 h-7 rounded-full cursor-pointer text-[11px] flex items-center justify-center hover:bg-[#1F6F5F] hover:text-white transition-all duration-200"
    >
      <i className={"fa-solid fa-" + icon} />
    </button>
  );
}

function SidebarFooter({ total, onViewCart }) {
  return (
    <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0">
      <div className="flex justify-between text-[18px] font-bold mb-4 text-gray-800">
        <span>Total</span>
        <span>Rs. {total.toLocaleString()}</span>
      </div>
      <button
        onClick={onViewCart}
        className="w-full py-[10px] text-[15px] font-semibold mb-3 bg-white text-[#1F6F5F] border-2 border-[#1F6F5F] rounded cursor-pointer hover:bg-[#1F6F5F] hover:text-white transition-all duration-200"
      >
        View Full Cart
      </button>
      <button className="w-full py-[10px] text-[15px] font-semibold bg-[#6FCF97] text-[#1F6F5F] border-none rounded cursor-pointer hover:bg-[#2FA084] hover:text-white transition-all duration-200">
        Checkout
      </button>
    </div>
  );
}

export default CartSidebar;
