import './index.scss'
import Logo from '../../assets/ghg.png'
import { Link } from "react-router-dom"
import { useState, React, useContext} from "react";
import { ShopContext } from "../../shop-context";

function Navbar({cartFunction}){

  const { totalItems } = useContext(ShopContext);
    return (
    <>
   
    <nav className="navbar">

        <div className="navbar-imglogo">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>GHG</h1>
      </div>
      
        <ul className='navbar-links'>
        <li>
          <Link to="/">Home</Link>
        </li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/reviews">Reviews</Link></li>
    <li><Link to="/team">Team</Link></li>
    <li><Link to="/contact">Contact</Link></li>
        </ul>    
        
  <div className="navbar-buttons">
  <div className="menu-cart" onClick={cartFunction}>
    <span>
    <span class="menu-cart-button">{totalItems}</span>
    <i class="fa-solid fa-cart-shopping"></i>
    </span>
    </div>
  <Link to="/login" className= "bg-red-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-300" >
              Sign In
            </Link>
            <Link to="/register" className= "bg-red-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-300">
              Register
            </Link>
            
          </div>
    </nav>
    </>
    )
}

 

export default Navbar
