import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import SendOrder from "./SendOrder";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { precioTotal, setPrecioTotal } = useContext(CartContext);

  const eliminarProducto = (productRemove) => {
    const newPrecio =
      precioTotal - productRemove.price * productRemove.quantity;
    setPrecioTotal(newPrecio);

    const newCart = cart.filter((product) => {
      return product.id !== productRemove.id;
    });

    setCart(newCart);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>
          El carrito está vacío. Por favor, vuelva al catálogo para realizar su
          compra.
        </p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Precio: {product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              <button onClick={() => eliminarProducto(product)}>
                Eliminar producto{" "}
              </button>
            </li>
          ))}
          <p>Total: {precioTotal}</p>
        </ul>
      )}
      <SendOrder />
    </div>
  );
};
export default Cart;
