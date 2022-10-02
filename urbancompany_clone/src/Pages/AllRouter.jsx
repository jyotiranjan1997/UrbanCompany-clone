import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";

import WomenSaloon from "./ProductPages/WomenSaloon";
import MenSaloon from "./ProductPages/MensSaloon";

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/womensaloon" element={<WomenSaloon />}></Route>
      <Route path="/mensaloon" element={<MenSaloon />}></Route>
      <Route path="/womensaloon" element={<WomenSaloon />}></Route>
    </Routes>
  );
}
