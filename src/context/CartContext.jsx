import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem("xclothing-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("xclothing-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    setCartItems(function (prevItems) {
      const alreadyInCart = prevItems.find(function (item) {
        return item.id === product.id;
      });

      if (alreadyInCart) {
        return prevItems.map(function (item) {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(productId) {
    setCartItems(function (prevItems) {
      return prevItems.filter(function (item) {
        return item.id !== productId;
      });
    });
  }

  function increaseQty(productId) {
    setCartItems(function (prevItems) {
      return prevItems.map(function (item) {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  }

  function decreaseQty(productId) {
    setCartItems(function (prevItems) {
      return prevItems
        .map(function (item) {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter(function (item) {
          return item.quantity > 0;
        });
    });
  }

  function clearCart() {
    setCartItems([]);
  }

  const totalItems = cartItems.reduce(function (total, item) {
    return total + item.quantity;
  }, 0);

  const totalPrice = cartItems.reduce(function (total, item) {
    return total + item.newPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
