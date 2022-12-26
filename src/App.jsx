import { useEffect } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyle from "./GlobalStyles";
import Cartpage from "./Pages/Cartpage/Cartpage";
import HomePage from "./Pages/Homepage/HomePage";
import Category from "./Pages/Category/Category";
import axios from 'axios';
import { fetchProducts } from "./Redux";

const fecthData = async () => {
  try {
    const { data } = await axios.get("data.json");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
function App() {
  const myData = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (myData.length === 0) {
      const data = fecthData();
      data
        .then((data) => {
          dispatch(fetchProducts(data.products));
        })
        .catch((error) => console.log(error.message));
    }
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/"  element ={<HomePage />} />
        <Route path="/cart" element ={<Cartpage />} />
        <Route path="/monitors" element ={<Category />} />
        <Route path="/headphones" element ={<Category />} />
        <Route path="/keyboards" element ={<Category />} />
        <Route path="/mouses" element ={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
