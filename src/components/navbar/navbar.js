import React from "react";
import './navbar.css';
import logo from '../../assets/logo.jpeg';
import {Link} from 'react-scroll';
const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenubtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src="" alt="" className="desktopMenuImg"/> Contact Me</button>
        </nav>
    )
}
export default Navbar;
