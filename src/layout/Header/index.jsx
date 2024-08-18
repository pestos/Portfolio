import React, { useState } from "react";
import "../Header/header.scss";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                <button className="menu-toggle" onClick={toggleMenu}>
                    &#9776;
                </button>
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
                    <a
                        className="secondary"
                        href="#contact"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                </nav>
            )}
        </header>
    );
}

export default Header;
