import Appli from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import {Routes, Route} from "react-router-dom"
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Chat from "./components/Chat/Chat";
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
      </Routes>
      <Chat/>
      <Footer/>
      
    </>
    
    
  );
}

export default App;
