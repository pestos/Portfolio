import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/styles/index.scss";
import pestos from "../src/images/pestos.png";
import Header from "./layout/Header";
import reactLogo from "../src/images/react.png";

import node from "../src/images/node.png";
import Button from "../src/component/Button";

import reportWebVitals from "./reportWebVitals";
import Pendulum from "../src/component/cube/index";
import ContentCard from "../src/component/ContentCard";
import Navbar from "./component/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <section className="contentIndex">
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
        <section className="contentWork">
            <h2>Mes services</h2>
            <p>"Des solutions sur mesure pour chaque défi."</p>
            <ContentCard />
        </section>

        <section className="myWork">
            <h2>Mes Travaux</h2>
            <p>"Vous trouvrez tous mes realisation."</p>

            <Navbar />
        </section>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
