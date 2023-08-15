import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact/Contact";
import {Routes, Route} from "react-router-dom"
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Chat from "./components/Chat/Chat";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { ShopContextProvider } from "./shop-context";
import Shop from "./components/Shop/Shop";
function App() {

  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  }
  
  return (
   
    <>
    <ShopContextProvider>
    <Nav cartFunction={ToggleSidebar}/>
    <Routes>
        <Route index path = "/" element={<Hero></Hero>} />
        <Route path = "about" element={<About></About>} />
        <Route path = "reviews" element={<Reviews></Reviews>} />
        <Route path = "team" element={<Team></Team>} />
        <Route path = "contact" element={<Contact></Contact>} />
        <Route path = "login" element={<Login></Login>} />
        <Route path = "register" element={<Register></Register>} />
        <Route path = "Shop" element={<Shop></Shop>} />

      </Routes>
      <Cart cartOpen={isOpen} toggleCart={ToggleSidebar}/>
      <Chat/>
      </ShopContextProvider>
    </>
    
    
  );
}

export default App;
