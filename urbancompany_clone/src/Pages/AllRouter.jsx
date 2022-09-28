import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";


export default function AllRoute() {
    



    return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/" element={<h1>Home</h1>}></Route>
      </Routes>
    );
}