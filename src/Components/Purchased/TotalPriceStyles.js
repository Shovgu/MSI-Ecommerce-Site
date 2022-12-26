import styles from "styled-components";

export const Container = styles.div`
  max-height: 150px;
  min-width: 150px;
  max-width:200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  margin: 0.5rem 2rem 1rem 2rem;
  background-color: white;
  box-shadow: 0px 0px 1px 1px red;
  @media screen and (min-width: 768px) {
    margin: 0.5rem 2rem 0rem 0rem;
  }
`;
export const Info = styles.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  @media screen and (min-width: 768px) {
  }
`;
export const Name = styles.h3`
  color: red;
  font-size: 1rem;
  display: block;
`;
export const Price = styles.p`
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 768px) {
    min-width: 90px;
  }
`;