import React, { useState } from "react";
import "./contentCard.scss";
import Tag from "../Tag";

const App = () => {
    const [activeTab, setActiveTab] = useState(1);

    const renderContent = () => {
        switch (activeTab) {
            case 1:
                return (
                    <div className="contentCard">
                        <h2>Web developpement</h2>
                        <p>
                            Développement d'applications web front-end, site
                            vitrines
                        </p>
                        <h2>Langages utilisés</h2>
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
                );
            case 2:
                return (
                    <div className="contentCard">
                        <h2>Web developpement</h2>
                        <p>
                            Développement d'applications web back-end, site
                            vitrines
                        </p>
                        <h2>Langages utilisés</h2>
                        <div className="contentTag">
                            <Tag tag="Node.Js" />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="contentCard">
                        <h2>Controle technique Automobile</h2>
                        <p>
                            Le contrôle technique consiste en une série de
                            vérifications obligatoires visant à s'assurer que le
                            véhicule est en bon état de fonctionnement
                        </p>
                        <h2>Véhicule concernée</h2>
                        <div className="contentTag">
                            <Tag tag="Véhicule < 3.5" />
                            <Tag tag="4x4" />
                            <Tag tag="Camping Car" />
                        </div>
                        <div className="contentTag">
                            <Tag tag="Moto" />
                            <Tag tag="125" />
                            <Tag tag="50" />
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="Card">
                        <h2>Contenu du Tab 1</h2>
                    </div>
                );
        }
    };

    return (
        <div className="card">
            {renderContent()}
            <div className="tab-buttons">
                <div
                    className={`tab-button ${activeTab === 1 ? "active" : ""}`}
                    onClick={() => setActiveTab(1)}
                >
                    {" "}
                    <i className="fa-solid fa-computer"></i>
                </div>
                <div
                    className={`tab-button ${activeTab === 2 ? "active" : ""}`}
                    onClick={() => setActiveTab(2)}
                >
                    <i className="fa-solid fa-server"></i>
                </div>
                <div
                    className={`tab-button ${activeTab === 3 ? "active" : ""}`}
                    onClick={() => setActiveTab(3)}
                >
                    {" "}
                    <i className="fa-solid fa-car"></i>
                </div>
            </div>
            <div className="tab-content"></div>
        </div>
    );
};

export default App;
