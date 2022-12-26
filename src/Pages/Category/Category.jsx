import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import ProductTypes from "../../Components/ProductTypes/ProductTypes";

const Category = () => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  return (
    <>
      <Header />
      <ProductTypes param={pathName} />
    </>
  );
};

export default Category;
