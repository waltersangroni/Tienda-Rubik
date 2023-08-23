import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemCount = ({ stock, id, price, name }) => {
  const [contador, setContador] = useState(0);

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
    </div>
  );
};

export default ItemCount;
