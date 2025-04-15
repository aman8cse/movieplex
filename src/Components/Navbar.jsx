import React from "react";
import '../css/Navbar.css';
import { Link } from "react-router-dom";

function Navbar () {
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    }

    return(
        <>
        <nav className="navbar">
            <div className="navbarbrand">
                <Link to="/Home" className="logo navlink">Binge</Link>
                <div className="optionsBox">
                    <div className="options">
                        <p>Movies</p>
                        <p>TV Shows</p>
                        <p>People</p>
                        <p>More</p>
                    </div>
                </div>
            </div>
            <div className="navbarlinks">
                <Link to="/Home" className="navlink">Home</Link>
                <Link to="/favourites" className="navlink">Favourites</Link>
                <div className="theme navlink" onClick={toggleTheme}>Theme</div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;