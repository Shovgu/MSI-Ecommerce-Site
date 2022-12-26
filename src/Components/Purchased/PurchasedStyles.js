import styles from "styled-components";

export const Container = styles.div`
  display: flex;
  justify-content: center;
  border-radius: 0.2rem;
  width: 100%;
  margin: 0.5rem 2rem;
  background-color: white;
  box-shadow: 0px 0px 1px 1px red;
  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: start;
  }
`;
export const ImgDiv = styles.div`
  width: 120px;
  height: 90px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;
export const Img = styles.img`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
  width: 100%;
`;
export const Info = styles.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Name = styles.h3`
  color: red;
  font-size: 1rem;
  display: block;
  &::first-letter {
    text-transform: capitalize;
  }
`;
export const Price = styles.p`
  font-weight: 700;
  @media screen and (min-width: 768px) {
    min-width: 90px;
  }
`;
export const Desc = styles.p`
  display: block;
  font-weight: 500;
  text-align: center;
  &::first-letter {
    text-transform: capitalize;
  }
  @media screen and (min-width: 768px) {
    min-width: 90px;
  }
`;
export const DeleteItem = styles.div`
  cursor: pointer;
  // background-color: red;
  width: 1.5rem;
  height: 1.2rem;
  font-size:40px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color:red;
    color:white;
    border:1px solid black
  }
`;