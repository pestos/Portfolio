import React, { useState } from "react";
import "../Header/header.scss";
import image from "../../images/pestos.png";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSquareVisible, setIsSquareVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSquareVisible(!isSquareVisible); // Toggle square visibility
    };

    return (
        <header>
            <div className="content">
                <a className="primary" href="#homes">
                    Home
                </a>
                <a className="primary" href="#services">
                    Mes Services
                </a>
                <a className="primary" href="#mes-travaux">
                    Mes Travaux
                </a>
                <a className="secondary" href="#contact">
                    Contact
                </a>
            </div>

            <div className="divMenu">
                <button className="menu-toggle" onClick={toggleMenu}>
                    &#9776;
                </button>
                <img src={image} alt="Menu"></img>
            </div>

            {isMenuOpen && (
                <nav className="mobile-menu">
                    <a className="primary" href="#homes" onClick={toggleMenu}>
                        Home
                    </a>
                    <a
                        className="primary"
                        href="#services"
                        onClick={toggleMenu}
                    >
                        Mes Services
                    </a>
                    <a
                        className="primary"
                        href="#mes-travaux"
                        onClick={toggleMenu}
                    >
                        Mes Travaux
                    </a>
                    <a className="primary" href="#contact" onClick={toggleMenu}>
                        Contact
                    </a>
                </nav>
            )}

            {/* Carré qui apparaît */}
            {isSquareVisible && <div className="square"></div>}
        </header>
    );
}

export default Header;
