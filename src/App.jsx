import React from "react";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { UserStorage } from "./UserContext";

function App() {

  return (
  <div>
    <BrowserRouter>
    <UserStorage>
    <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login/*" element={<Login />} />
  </Routes>
    <Footer />
    </UserStorage>
    </BrowserRouter>
    </div>
  );     
}

export default App;
