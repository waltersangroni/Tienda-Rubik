import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

const SendOrder = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const { cart, setCart } = useContext(CartContext);
  const { precioTotal, setPrecioTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [compraRealizada, setCompraRealizada] = useState(false);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName === "" || email === "") {
      alert("Por favor, completa todos los campos.");
    } else {
      if (cart.length > 0) {
        setCompraRealizada(true);

        sendOrder();

        setPrecioTotal(0);
        setCart([]);

        setFullName("");
        setEmail("");

        setTimeout(() => {
          window.location.href = "/categoria/catalogo";
        }, 3000);
      } else {
        alert("El carrito esta vacio");
      }
    }
  };

  const sendOrder = () => {
    const order = {
      buyer: { name: fullName, email: email },
      items: cart,
      total: precioTotal,
    };
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  return (
    <div>
      <h1>Enviando Ordenes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre y Apellido"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar Informacion</button>
      </form>
      <p>Numero de orden: {orderId}</p>
      {compraRealizada && <p>¡Gracias por su compra!</p>}
    </div>
  );
};
export default SendOrder;
