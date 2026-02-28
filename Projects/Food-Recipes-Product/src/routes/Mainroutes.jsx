import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import Creaet from "../pages/Creaet";
import SingleRecipe from "../pages/SingleRecipe";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<SingleRecipe />} />
      <Route path="/about" element={<About />} />
      <Route path="/create-recipes" element={<Creaet />} />
    </Routes>
  );
};

export default MainRoutes;
