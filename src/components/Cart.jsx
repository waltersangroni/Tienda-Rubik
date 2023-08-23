import { useState } from "react";

const Cart = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [compraRealizada, setCompraRealizada] = useState(false);

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
      setCompraRealizada(false);
    }
  };

  return (
    <div>
      <ul>
        <li>
          <h3>Producto</h3>
        </li>
        <li>
          <p>Precio</p>
        </li>
        <li>
          <p>Total</p>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={handleNombreChange} />
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={handleApellidoChange} />
        <label>Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} />
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};
export default Cart;

// import { useContext } from "react";
// import { CartContext } from "../context/ShoppingCartContext";

// const Cart = () => {
//   const { cart, setCart, longitud } = useContext(CartContext);

//   return (
//     <div>
//       <p>{cart}</p>
//       <button onClick={() => setCart("Nuevo Valor")}>Cambiar valor</button>
//       <p>{longitud}</p>
//     </div>
//   );
// };

// export default Cart;
