import { Button, ButtonGroup } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ stock, id, price, name }) => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };
  const substracQty = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(1);
  };

  const addToCart = (quantityToAdd) => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + quantityToAdd };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: quantityToAdd, price, name }];
      }
    });
  };

  return (
    <div className="contador">
      <Button colorScheme="blue" size="xs" onClick={substracQty}>
        -
      </Button>
      <h2 className="contadorNumero">{count}</h2>
      <Button colorScheme="blue" size="xs" onClick={addQty}>
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
          Agregar al carrito:
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;
