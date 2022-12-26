import React from "react";
import { useDispatch } from "react-redux";
import { MdOutlineCancel } from "react-icons/md";
import { removeFromCart } from "../../Redux";
import {Container,Info,Img,Name,Price,Desc,DeleteItem, ImgDiv} from "./PurchasedStyles";

const Purchased = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Container>
        <Info>
          <ImgDiv>
            <Img src={data.img}></Img>
          </ImgDiv>
          <Name>{data.name}</Name>
          <Price>
            Price: <span>{data.price} $</span>
          </Price>
          <Desc>
            <span>{data.desc} </span>
          </Desc>
          <DeleteItem onClick={() => dispatch(removeFromCart(data))}>
            <MdOutlineCancel />
          </DeleteItem>
        </Info>
    </Container>
  );
};

export default Purchased;