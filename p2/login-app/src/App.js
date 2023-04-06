// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./containers/Register/Register";
import LoginPage from "./containers/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import "./App.css";
import { ParentContext } from "./ParentContext/ParentContext";
import { HomeDetails } from "./containers/Home/HomeDetails";
import { About } from "./containers/About/About";
import { Blogs } from "./containers/Blogs/Blogs";
function App() {
  return (
    <ParentContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/homedetails" element={<HomeDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ParentContext>
  );
}

export default App;
