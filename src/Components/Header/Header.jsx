import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Container,Logo, Hamburger, Close, Main } from "./HeaderStyles";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [toggle, setToggle] = useState(false);
  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <Container>
      <Main>
        <Logo to="/">
          <img src="https://storage-asset.msi.com/frontend/imgs/logo.png" alt="msi"></img>
        </Logo>
        {!isMobile ? (
          <>
            <Navbar closeMenu={closeMenu} />
          </>
        ) : toggle ? (
          <>
            <Close onClick={() => setToggle(!toggle)} />
            <Navbar closeMenu={closeMenu} />
          </>
        ) : (
          <>
            <Hamburger onClick={() => setToggle(!toggle)} />
          </>
        )}
      </Main>
    </Container>
  );
};

export default Header;
