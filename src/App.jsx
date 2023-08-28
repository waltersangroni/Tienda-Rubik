import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Item from "./components/Item";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ShoppingCartContext from "./context/ShoppingCartContext";

const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartContext>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/item" element={<Item />} />
          <Route
            exact
            path="/categoria/:categoria"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          {<Route exact path="/cart" element={<Cart />} />}
        </Routes>
      </ShoppingCartContext>
    </BrowserRouter>
  );
};

export default App;
