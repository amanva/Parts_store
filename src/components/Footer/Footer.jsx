import './Footer.scss'


function Footer(){

    return (
    <footer className="footer">
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


    </footer>

    );
}

export default Footer;