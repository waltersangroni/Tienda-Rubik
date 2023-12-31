import React from "react";
import banner from "../assets/img/banner-cubik.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="bienvenida">Bienvenidos a mi tienda!!</h1>
      <img src={banner} alt="Carrito" className="imagenPrincipal" />
      <Link to={`/categoria/${"catalogo"}`}>
        <p className="catalogo">Ingresar al catalogo</p>
      </Link>
    </div>
  );
};

export default Home;
