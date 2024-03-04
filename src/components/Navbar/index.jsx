import './index.scss'
import Logo from '../../assets/ghg.png'
import { Link } from "react-router-dom"
import { useState, React, useContext} from "react";
import { ShopContext } from "../../shop-context";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <li><Link to ="/Shop/:type"> Shop</Link></li>
        </ul>    
        
  <div className="navbar-buttons">
  <div className="menu-cart" onClick={cartFunction}>
    <span>
      <span class="menu-cart-button">{totalItems}</span>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
    </div>
  <Link to="/login" className= "link-button" >
              Sign In
            </Link>
            <Link to="/register" className= "link-button">
              Register
            </Link>
            
          </div>
    </nav>
    </>
    )
}

 

export default Navbar
