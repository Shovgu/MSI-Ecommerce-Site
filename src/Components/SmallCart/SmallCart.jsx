import React from "react";
import { useSelector } from "react-redux";
import {Container,Main,Number,Icon} from "./SmallCartStyles";

const SmallCart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <Container>
      <Main>
        {cartItems.length !== 0 ? (
          <Number>{cartItems.length}</Number>
        ) : (
          ""
        )}
        <Icon />
      </Main>
    </Container>
  );
};

export default SmallCart;
