import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [compraRealizada, setCompraRealizada] = useState(false);

  const { cart } = useContext(CartContext);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || apellido === "" || email === "") {
      alert("Por favor, completa todos los campos.");
    } else {
      setCompraRealizada(true);
      alert("¡Gracias por su compra!");

      setNombre("");
      setApellido("");
      setEmail("");
    }
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
              <p>Total: {product.price * product.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={handleNombreChange} />
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={handleApellidoChange} />
        <label>Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} />
        <button type="submit">Confirmar compra</button>
      </form>
      {compraRealizada && <p>¡Gracias por su compra!</p>}
    </div>
  );
};
export default Cart;
