import Appli from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import {Routes, Route} from "react-router-dom"
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Chat from "./components/Chat/Chat";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";
function App() {


  
  return (
   
    <>
    <Appli/>
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
      <Chat/>
      
    </>
    
    
  );
}

export default App;
