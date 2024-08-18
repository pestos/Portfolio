import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/styles/index.scss";
import pestos from "../src/images/pestos.png";
import Header from "./layout/Header";
import reactLogo from "../src/images/react.png";
import node from "../src/images/node.png";
import Button from "../src/component/Button";
import Gallery from "../src/component/Gallery";
import reportWebVitals from "./reportWebVitals";
import Pendulum from "../src/component/cube/index";
import ContentCard from "../src/component/ContentCard";

import ContactForm from "./component/Contact";
import BubulleContact from "./component/BubulleContact";
import Footer from "./layout/Footer/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <section className="contentIndex" id="homes">
            <div className="contentLeft">
                <p class="primary">Bonjour, Je suis</p>
                <h1>Gueirard Frederic</h1>
                <h2>
                    Un <span className="textGreen">Developpeur Web</span> et
                    Gérant de Centre Automobile de{" "}
                    <span className="textPurple">Nice</span>
                </h2>
                <p class="secondary">
                    Entrepreneur à mon compte dans le domaine du développement
                    web, je propose des services complets
                    <br />
                    pour la création et l'optimisation de sites internet.
                </p>
                <Button />
            </div>
            <div className="contentRight">
                <img src={pestos}></img>
                <Pendulum logo={reactLogo} pendulum="pendulum" />
                <Pendulum logo={node} pendulum="pendulumRight" />
            </div>
        </section>
        <section className="contentWork" id="services">
            <h2>Mes services</h2>
            <p>"Des solutions sur mesure pour chaque défi."</p>
            <ContentCard />
        </section>

        <section className="myWork" id="mes-travaux">
            <h2>Mes Réalisation</h2>
            <p>"Vous trouvrez tous mes realisation."</p>

            <div className="gallery">
                <Gallery />
            </div>
        </section>

        <section>
            <div className="contactForm" id="contact">
                <h2>Me Contacter</h2>
                <p>"Demande d'information n'hésitez pas à me contacter"</p>
                <div className="contactPlacement">
                    <div className="contactThree">
                        <BubulleContact
                            classB="circle orange"
                            classI="fa-solid fa-envelope"
                            title="Adresse"
                            description="82 avenue du monde"
                        />
                        <BubulleContact
                            classB="circle green"
                            classI="fa-solid fa-phone"
                            title="Email"
                            description="frederic@gmail.com"
                        />
                        <BubulleContact
                            classB="circle purple"
                            classI="fa-solid fa-location-dot"
                            title="Téléphone"
                            description="+336812600278"
                        />
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
        <section>
            <Footer />
        </section>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
