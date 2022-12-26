import React from "react";
import Article from "../Purchased/Purchased";
import { useSelector } from "react-redux";
import {Container,Main,Heading,Purchased,Empty} from "./CartStyles";
import TotalPrice from "../Purchased/TotalPrice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <Container>
      <Heading>Cart</Heading>
      <Main>
        <Purchased>
          {cartItems.length !== 0 ? (
            cartItems.map((item) => <Article data={item} key={item.id} />)
          ) : (
            <Empty>Empty!</Empty>
          )}
        </Purchased>
        {cartItems.length !== 0 ? <TotalPrice /> : ""}
      </Main>
    </Container>
  );
};

export default Cart;