import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce(function (sum, item) { return sum + item.quantity; }, 0);
  const shipping = totalPrice >= 5000 ? 0 : 299;
  const grandTotal = totalPrice + shipping;

  return (
    <div className="px-10 pb-16 pt-5">
      <CartHeading totalItems={totalItems} />

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex gap-8 items-start">
          <div className="flex-1">
            <CartTableHeader />
            {cartItems.map(function (item) {
              return (
                <CartRow
                  key={item.id}
                  item={item}
                  onRemove={() => removeFromCart(item.id)}
                  onIncrease={() => increaseQty(item.id)}
                  onDecrease={() => decreaseQty(item.id)}
                />
              );
            })}
            <CartActions onClear={clearCart} onContinue={() => navigate("/")} />
          </div>
          <OrderSummary subtotal={totalPrice} shipping={shipping} grandTotal={grandTotal} />
        </div>
      )}
    </div>
  );
}

function CartHeading({ totalItems }) {
  return (
    <div className="flex items-baseline gap-4 py-[10px] mb-5">
      <h1 className="text-[32px] text-[#1F6F5F]">Shopping Cart</h1>
      <span className="text-[14px] text-gray-400">
        {totalItems} item{totalItems !== 1 ? "s" : ""}
      </span>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="text-center py-20 px-5 bg-white rounded-xl">
      <i className="fa-solid fa-bag-shopping text-[72px] text-gray-200 block mb-5" />
      <h2 className="text-[24px] font-bold mb-2">Your cart is empty</h2>
      <p className="text-gray-400 mb-7">Looks like you haven't added anything yet.</p>
      <Link
        to="/"
        className="bg-[#6FCF97] text-[#1F6F5F] no-underline px-5 py-[10px] rounded font-semibold hover:bg-[#2FA084] hover:text-[#EEEEEE] transition-all duration-200"
      >
        Start Shopping
      </Link>
    </div>
  );
}

function CartTableHeader() {
  return (
    <div className="grid gap-3 px-4 py-3 bg-[#1F6F5F] text-white rounded-t-lg text-[13px] font-semibold uppercase tracking-wide"
      style={{ gridTemplateColumns: "2.5fr 1fr 1.2fr 1fr 40px" }}>
      <span>Product</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Subtotal</span>
      <span></span>
    </div>
  );
}

function CartRow({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div
      className="grid gap-3 px-4 py-[18px] border-b border-gray-100 items-center bg-white hover:bg-gray-50 transition-all duration-150"
      style={{ gridTemplateColumns: "2.5fr 1fr 1.2fr 1fr 40px" }}
    >
      <CartProductCell id={item.id} image={item.image} name={item.name} oldPrice={item.oldPrice} />
      <span className="font-semibold text-[14px] text-gray-700">Rs. {item.newPrice.toLocaleString()}</span>
      <CartQtyCell quantity={item.quantity} onIncrease={onIncrease} onDecrease={onDecrease} />
      <span className="font-semibold text-[14px] text-gray-700">Rs. {(item.newPrice * item.quantity).toLocaleString()}</span>
      <RemoveBtn onClick={onRemove} />
    </div>
  );
}

function CartProductCell({ id, image, name, oldPrice }) {
  return (
    <div className="flex gap-[14px] items-center">
      <Link to={"/product/" + id}>
        <img src={image} alt={name} className="w-[72px] h-[85px] object-cover rounded-md bg-gray-50 shrink-0" />
      </Link>
      <div>
        <p className="font-semibold text-[14px] text-gray-800 mb-1">{name}</p>
        {oldPrice && (
          <p className="text-[12px] text-gray-400">Was: <del>Rs. {oldPrice.toLocaleString()}</del></p>
        )}
      </div>
    </div>
  );
}

function CartQtyCell({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-[10px] border border-gray-200 rounded-md py-1 px-2 w-fit">
      <QtyBtn icon="minus" onClick={onDecrease} />
      <span className="text-[14px] font-semibold">{quantity}</span>
      <QtyBtn icon="plus" onClick={onIncrease} />
    </div>
  );
}

function QtyBtn({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border-none cursor-pointer text-[12px] text-gray-500 w-[22px] h-[22px] flex items-center justify-center hover:text-[#1F6F5F] transition-colors duration-200"
    >
      <i className={"fa-solid fa-" + icon} />
    </button>
  );
}

function RemoveBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border-none cursor-pointer text-gray-300 text-[18px] hover:text-[#e44d26] transition-colors duration-200"
    >
      <i className="fa-solid fa-xmark" />
    </button>
  );
}

function CartActions({ onClear, onContinue }) {
  return (
    <div className="flex justify-between mt-5 flex-wrap gap-3">
      <button
        onClick={onClear}
        className="bg-transparent border border-gray-200 text-gray-400 px-[18px] py-[10px] rounded-md cursor-pointer text-[13px] hover:border-[#e44d26] hover:text-[#e44d26] transition-all duration-200"
      >
        <i className="fa-solid fa-trash mr-2" />
        Clear Cart
      </button>
      <button
        onClick={onContinue}
        className="bg-transparent border-none text-[#1F6F5F] font-semibold text-[14px] cursor-pointer hover:underline"
      >
        <i className="fa-solid fa-arrow-left mr-2" />
        Continue Shopping
      </button>
    </div>
  );
}

function OrderSummary({ subtotal, shipping, grandTotal }) {
  return (
    <div className="w-[320px] shrink-0 bg-white rounded-xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.07)] sticky top-[100px]">
      <h2 className="text-[18px] font-bold mb-5 pb-4 border-b-2 border-gray-100">Order Summary</h2>

      <SummaryRow label="Subtotal" value={"Rs. " + subtotal.toLocaleString()} />
      <SummaryRow label="Shipping" value={shipping === 0 ? "FREE" : "Rs. " + shipping} isFree={shipping === 0} />

      {shipping > 0 && (
        <p className="text-[12px] text-[#e44d26] mt-2 text-center bg-red-50 p-2 rounded-md">
          Add Rs. {(5000 - subtotal).toLocaleString()} more for free shipping!
        </p>
      )}

      <div className="flex justify-between text-[18px] font-bold mt-4 pt-4 border-t-2 border-gray-100">
        <span>Total</span>
        <span>Rs. {grandTotal.toLocaleString()}</span>
      </div>

      <CheckoutBtn />
      <div className="flex justify-center gap-4 mt-8 text-[28px] text-gray-300">
        <i className="fa-brands fa-cc-visa" />
        <i className="fa-brands fa-cc-mastercard" />
        <i className="fa-solid fa-money-bill-wave" />
      </div>
      <p className="text-center text-[12px] text-gray-300 mt-2 flex items-center justify-center gap-2">
        <i className="fa-solid fa-shield-halved" /> Secure & encrypted payment
      </p>
    </div>
  );
}

function SummaryRow({ label, value, isFree }) {
  return (
    <div className="flex justify-between text-[14px] text-gray-500 py-[10px] border-b border-gray-50">
      <span>{label}</span>
      <span className={isFree ? "text-[#1F6F5F] font-bold" : ""}>{value}</span>
    </div>
  );
}

function CheckoutBtn() {
  return (
    <button className="w-full py-[10px] bg-[#6FCF97] text-[#1F6F5F] border-none rounded text-[16px] font-semibold cursor-pointer mt-4 hover:bg-[#2FA084] hover:text-[#EEEEEE] transition-all duration-200">
      <i className="fa-solid fa-lock mr-2" />
      Secure Checkout
    </button>
  );
}

export default CartPage;
