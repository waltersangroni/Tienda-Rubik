import { Button, ButtonGroup } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ stock, id, price, name }) => {
  const [cart, setCart] = useContext(CartContext);
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const reset = () => {
    setContador(0);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item = item.id === id));
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + contador };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: contador, price, name }];
      }
    });
  };

  return (
    <div className="contador">
      <Button colorScheme="blue" size="xs" onClick={restar}>
        -
      </Button>
      <h2 className="contadorNumero">{contador}</h2>
      <Button colorScheme="blue" size="xs" onClick={sumar}>
        +
      </Button>
      <Button
        className="contadorReset"
        colorScheme="blue"
        size="xs"
        onClick={reset}
      >
        Reset
      </Button>
      <ButtonGroup spacing="2">
        <Button variant="solid" colorScheme="blue" onClick={() => addToCart()}>
          Agregar al carrito: {contador}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;
