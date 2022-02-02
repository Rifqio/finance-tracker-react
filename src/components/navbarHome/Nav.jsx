import { Link } from 'react-router-dom'
import { Link as NavLink, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Nav = () => {
    window.addEventListener('scroll', function () {
        const nav = document.querySelector('nav')
        nav.classList.toggle('sticky', window.scrollY > 0)
    })
    return ( 
        <nav className="flex justify-between top-0 left-0 max-h-min w-full px-16 py-8 z-30 bg-background text-darkText font-sans">
        <span className="font-bold text-3xl relative"><Link to="/">Finance</Link></span>
        <ul className="flex justify-center gap-10 relative">
            <li><NavLink activeClass="font-semibold border-b-2 text-green-600 border-green-600" to="home" spy={true} smooth={true} offset={-110} duration={400} className="px-0.5 cursor-pointer hover:font-semibold hover:text-green-600">Home</NavLink></li>
            <li><NavLink activeClass="font-semibold border-b-2 text-green-600 border-green-600" to="reviews" spy={true} smooth={true} offset={-100} duration={400} className="px-0.5 cursor-pointer hover:font-semibold hover:text-green-600">Reviews</NavLink></li>
            <li><NavLink activeClass="font-semibold border-b-2 text-green-600 border-green-600" to="pricing" spy={true} smooth={true} offset={-60} duration={400} className="px-0.5 cursor-pointer hover:font-semibold hover:text-green-600">Pricing</NavLink></li>
            <li><NavLink activeClass="font-semibold border-b-2 text-green-600 border-green-600" to="contact" spy={true} smooth={true} className="px-0.5 cursor-pointer hover:font-semibold hover:text-green-600">Contact Us</NavLink></li>
        </ul>
        <button className="border border-darkText px-6 py-2 rounded font-semibold hover:bg-darkText hover:text-white hover:transition-all"><Link to="/login">Sign In</Link></button>
    </nav>
     );
}
 
export default Nav;