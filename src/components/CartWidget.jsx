import React from "react";
import carrito from "../assets/img/carrito-img.png";

const CartWidget = () => {
  return (
    <div className="carrito-container">
      <img src={carrito} alt="Carrito" width="40rem" />
      <p className="number-carrito">8</p>
    </div>
  );
};

export default CartWidget;
