import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createContext } from "react";

//................import file ..............//

import Home from "./Home/Home";
import Category from "./category/Category";
import Favourite from "./Favourite/Favourite";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Admin from "./Admin/Admin";

//..............context work...............//

export const HireContext = createContext({})

function App() {

  const [username, setUsername] = useState("")


  return (

    <>
      <HireContext.Provider value={{ username, setUsername }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />   
            <Route path="/favourite " element={<Favourite />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HireContext.Provider>

    </>
  );
}

export default App;
