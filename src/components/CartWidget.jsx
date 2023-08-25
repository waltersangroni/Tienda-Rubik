import React from "react";
import carrito from "../assets/img/carrito-img.png";
// import { useContext } from "react";
// import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {
  // const { longitud } = useContext(CartContext);
  return (
    <div className="carrito-container">
      <img src={carrito} alt="Carrito" width="40rem" />
      <p className="number-carrito">4</p>
    </div>
  );
};

export default CartWidget;
