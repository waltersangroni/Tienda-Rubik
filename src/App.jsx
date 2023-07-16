import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos al universo de los Cubos Magicos" />
    </>
  );
};

export default App;
