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
        <li>
          <Link to="/">Home</Link>
        </li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Project</Link></li>
    <li><Link to="/contact">Contact</Link></li>
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
