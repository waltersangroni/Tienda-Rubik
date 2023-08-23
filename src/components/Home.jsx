import React from "react";
import banner from "../assets/img/banner-cubik.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenidos a mi tienda!</h1>
      <img src={banner} alt="Carrito" />
      <Link to={`/catalogo/${"catalogo"}`}>
        <p>Ingresar al catalogo</p>
      </Link>
    </div>
  );
};

export default Home;
