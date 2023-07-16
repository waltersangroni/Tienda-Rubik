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

const NavBar = () => {
  return (
    <div className="nav-container">
      <Box p="4" borderRadius="md">
        <h2 className="logo">Tienda Rubik</h2>
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
            GAN
          </MenuItem>
          <MenuItem bg="#f2f2f2" borderRadius="1rem">
            MOYU
          </MenuItem>
          <MenuItem bg="#f2f2f2" borderRadius="1rem">
            RUBIK´S
          </MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </div>
  );
};

export default NavBar;
