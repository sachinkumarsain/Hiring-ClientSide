// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import Home from "./Home/Home";
import Category from "./category/Category";
import Favourite from "./Favourite/Favourite";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Admin from "./Admin/Admin";
import Condedates from "./category/Condedate/Condedates";
import Login from "./UserForm/Login/Login";
import Register from "./UserForm/Register/Register";

export const HireContext = createContext({});

function App() {
  const [username, setUsername] = useState("");
  const [condedates, setCondedates] = useState([]);

  return (
    <Router>
      <HireContext.Provider value={{ username, setUsername, condedates, setCondedates }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/condedates" element={<Condedates />} />
        </Routes>
        <Footer />
      </HireContext.Provider>
    </Router>
  );
}

export default App;
