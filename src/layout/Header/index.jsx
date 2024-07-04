import "../Header/header.scss";

function Header() {
    return (
        <div className="content">
            <a class="primary" href="#services">
                Mes Services
            </a>
            <a class="primary" href="#mes-travaux">
                Mes Travaux
            </a>
            <a class="secondary" href="#contact">
                Contact
            </a>
        </div>
    );
}

export default Header;
