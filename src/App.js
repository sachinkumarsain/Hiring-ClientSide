import react from "react"
import {BrowserRouter , Routes , Route} from "react-router-dom"

import Home from "./Home/Home";
import Category from "./category/Category";
import Favourite from "./Favourite/Favourite";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
function App() {
  return (
    
   <>

   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/category" element={<Category/>}/>
    <Route path="/favourite " element={<Favourite />}/>
   </Routes>
   <Footer/>
   </BrowserRouter>

   </>
  );
}

export default App;
