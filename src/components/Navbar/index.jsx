import './index.scss'
import Logo from '../../assets/ghg.png'
import { Link } from "react-router-dom"
function Navbar(){
    return (
    <>
    <nav className="navbar">

        <div className="navbar-imglogo">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>GHG</h1>
      </div>
      
        <ul className='navbar-links'>
  <li><a href = "#home">Home</a></li>
    <li><a href = "#about">About</a></li>
    <li><a href = "#projects">Projects</a></li>
    <li><a href = "#contact">Contact</a></li>
        </ul>    
  <div className="navbar-buttons">
            <Link className="sign" >
              Sign In
            </Link>
            <Link className="reg" >
              Register
            </Link>
          </div>
    </nav>
    </>
    )
}



export default Navbar
