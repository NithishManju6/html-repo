// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./containers/Register/Register";
import LoginPage from "./containers/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import HomeDatails from "./containers/Home/HomeDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/homedetails" element={<HomeDatails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
