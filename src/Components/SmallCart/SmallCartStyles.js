import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const Container = styled.div`
  padding: 0.5rem 1rem;
  @media screen and (min-width: 768px) {
    padding: unset;
  }
`;
export const Main = styled.div`
  position: relative;
  display: flex;
`;
export const Number = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: -6px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled(FaShoppingCart)``;
