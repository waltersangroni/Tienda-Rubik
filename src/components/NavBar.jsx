import React from "react";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import logo from "../assets/img/rubiks-logo.png";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const NavBar = () => {
  return (
    <div className="nav-container">
      <Box p="4" borderRadius="md">
        <Link to={"/"}>
          <img src={logo} alt="Logo Rubik" width="180rem" />
        </Link>
      </Box>
      <Menu>
        <MenuButton
          colorScheme="blue"
          className="categorias"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          Categorias
        </MenuButton>
        <MenuList bg="#f2f2f2">
          <MenuItem bg="#f2f2f2" borderRadius="1rem">
            <Link to={`/categoria/${"gan"}`}>GAN</Link>
          </MenuItem>
          <MenuItem bg="#f2f2f2" borderRadius="1rem">
            <Link to={`/categoria/${"moyu"}`}>MOYU</Link>
          </MenuItem>
          <MenuItem bg="#f2f2f2" borderRadius="1rem">
            <Link to={`/categoria/${"rubik"}`}>RUBIK´S</Link>
          </MenuItem>
          <MenuItem bg="#f2f2f2" borderRadius="1rem">
            <Link to={`/categoria/${"catalogo"}`}>CATALOGO</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Link to={"/cart"}>{<CartWidget />}</Link>
      <div>
        <Link to={"/contact"} className="contacto">
          {Contact}Contacto
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
