import React from "react";
import carrito from "../assets/img/carrito-img.png";
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItemsInCart = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  console.log(totalItemsInCart);
  return (
    <div className="carrito-container">
      <img src={carrito} alt="Carrito" width="40rem" />
      <p className="number-carrito">{totalItemsInCart}</p>
    </div>
  );
};

export default CartWidget;
