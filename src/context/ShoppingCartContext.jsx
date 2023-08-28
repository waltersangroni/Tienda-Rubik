import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

  return (
    <CartContext.Provider
      value={{ cart, setCart, precioTotal, setPrecioTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
