/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const cartState = () => {
  return useContext(CartContext);
};

export default Context;
