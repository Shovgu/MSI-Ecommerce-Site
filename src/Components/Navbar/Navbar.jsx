import React from "react";
import { Container, Items, Item } from "./NavbarStyles";
import SmallCart from "../SmallCart/SmallCart";

const Navbar = ({ closeMenu }) => {
  return (
    <Container>
      <Items>
        <Item to="/" onClick={() => closeMenu()}>
          All
        </Item>
        <Item to="/monitors" onClick={() => closeMenu()}>
          Monitors
        </Item>
        <Item to="/headphones" onClick={() => closeMenu()}>
          Headphones
        </Item>
        <Item to="/keyboards" onClick={() => closeMenu()}>
          Keyboards
        </Item>
        <Item to="/mouses" onClick={() => closeMenu()}>
          Mouses
        </Item>
        <Item to="/cart">
          <SmallCart />
        </Item>
      </Items>
    </Container>
  );
};

export default Navbar;
