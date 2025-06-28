import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../Components/default/Hero";
import Category from "../Components/default/Category";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Searched from "./Searched";
import Footer from "../Components/default/Footer";
import ScrollTop from "../Components/default/ScrollTop";

function Pages() {
  return (
    <BrowserRouter basename="/Chef-Palace">
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
