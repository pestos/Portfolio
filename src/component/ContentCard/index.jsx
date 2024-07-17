import "./contentCard.scss";
import Tag from "../Tag/index";

function ContentCard() {
    return (
        <div className="Card">
            <i class="fa-solid fa-computer"></i>
            <div className="contentCard">
                <h2>Web developpement </h2>
                <p>
                    Développement d'appplications web front-end, site vitrines
                </p>
                <h2>Langages utilisés</h2>
                <div></div>
                <div className="contentTag">
                    <Tag tag="HTML" />
                    <Tag tag="CSS" />
                    <Tag tag="SASS" />
                </div>
                <div className="contentTag">
                    <Tag tag="Javascript" />
                    <Tag tag="React" />
                    <Tag tag="Wordpress" />
                </div>
            </div>
        </div>
    );
}

export default ContentCard;
