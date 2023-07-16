import { Flex, Box } from "@chakra-ui/react";
import React from "react";

const CartWidget = () => {
  return (
    <div className="carrito-container">
      <i className="bi bi-cart4 carrito"></i>
      <p className="number-carrito">5</p>
    </div>
  );
};

export default CartWidget;
