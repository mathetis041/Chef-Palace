import Category from "../Components/default/Category";
import Cuisine from "./Cuisine";
import Footer from "../Components/default/Footer";
import Hero from "../Components/default/Hero";
import Home from "./Home";
import Recipe from "./Recipe";
import ScrollTop from "../Components/default/ScrollTop";
import Searched from "./Searched";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Hero />
      <Category />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Pages;
