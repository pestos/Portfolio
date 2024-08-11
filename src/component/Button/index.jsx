import "../Button/button.scss";
function Button() {
    return (
        <div className="contentButton">
            <a className="contactMe">Me contacter</a>
            <a href="https://www.linkedin.com/in/frederic-gueirard-39665272/">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/pestos">
                <i class="fa-brands fa-github"></i>
            </a>
        </div>
    );  
}

export default Button;
