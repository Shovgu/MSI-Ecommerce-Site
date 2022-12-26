import React from "react";
import { useSelector } from "react-redux";
import {Container,Info,Name,Price} from "./TotalPriceStyles";

const Total = () => {
  const { cartItems } = useSelector((state) => state);
  let totalPrice = 0;

  if (cartItems.length !== 0) {
    totalPrice = cartItems.reduce(function (sum, item) {
      return (sum = sum + +item.price);
    }, 0);
  }

  return (
    <Container>
        <Info>
          <Name>Total Price</Name>
          <Price>
            <span>{totalPrice} $</span>
          </Price>
        </Info>
    </Container>
  );
};

export default Total;
