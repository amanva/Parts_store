import './Footer.scss'


function Footer(){

    return (
    
    <footer className="footerContainer">
        <div className="headfooter">
        <div className="container">
        <div className="information-container">
    <div className="information">
        <div className="text-information">
        <div className="text-header">
            <h2>Join For Daily Updates</h2>
        </div>
        <div className="text-desc">
            <p>Join to get the latest deals and updates to our store</p>
        </div>
        <div className="input-box">
            <div className="email-input">
            <input type="email" name="email" placeholder="Enter Your Email Address" required="">
            </input>
            
            </div>
            <div className="email-submit">
            <button type="submit" className="sub-button">
                Sign Up
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div className="footer">
    <div className="container">
    <div className="footer-items">
    <ul className="footer-links">
        <li className='font-bold'>Quick Links</li>
        <li>
        <a href="/">FAQ </a>
        </li>
        <li>
        <a href="/contact">Contact Us</a>
        </li>
    </ul>
    <ul className="footer-info">
        <li className='font-bold'>Company Info</li>
        <li>
        <a href="/about">About Us</a></li>
        <li><a href="/">Careers</a></li>
        <li><a href="/">Suppliers</a></li>
        <li><a href="/">For Employees</a></li>
    </ul>
    <ul className="footer-policies">
        <li className='font-bold'>Policies and Disclosures</li>
        <li><a href="/">Terms of Use</a></li>
        <li><a href="/">Privacy Policy</a></li>
    </ul>
    <ul className="footer-connect">
        <li className='font-bold'>Connect</li>
        <li><a href="/">Terms of Use</a></li>
        <li><a href="/">Privacy Policy</a></li>
    </ul>
    </div>
        
    </div>
    </div>

    </footer>

    );
}

export default Footer;