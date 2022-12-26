import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-flow: column;
  max-width: 1280px;
  margin: auto;
`;
export const Main = styled.div`
  display: flex;
  flex-flow: column;
`;
export const Heading = styled.h1`
  display: block;
  text-align: center;
  padding: 1rem 2rem;
  color: black;
  letter-spacing: 0.03rem;
  font-weight: 700;
  &::first-letter {
    text-transform: capitalize;
  }
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
export const Products = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
