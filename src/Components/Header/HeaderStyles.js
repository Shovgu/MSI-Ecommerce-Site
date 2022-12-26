import styles from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

export const Container = styles.header`
  width: 100%;
  border-bottom: 1px solid black;
  background-color: #eee;
`;
export const Main = styles.div`
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
  position: relative;
  max-width: 1280px;
  margin: auto;
  min-height: 56px;
`;
export const Logo = styles(Link)`
  display:flex;
`;
export const Hamburger = styles(GiHamburgerMenu)`
  position: absolute;
  right: 30px;
  z-index: 2;
  cursor: pointer;
  color: black;
`;
export const Close = styles(CgClose)`
  position: absolute;
  right: 30px;
  z-index: 3;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
`;