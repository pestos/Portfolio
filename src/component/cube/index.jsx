import React from "react";
import { motion } from "framer-motion";
import "./cube.scss";
// Assurez-vous que le chemin vers votre logo est correct

const Pendulum = (props) => {
    return (
        <motion.div
            className={props.pendulum}
            animate={{
                y: [0, 20, 0], // Mouvement de haut en bas
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse", // Pour revenir en arrière
                ease: "easeInOut",
            }}
        >
            <img src={props.logo} alt="Logo React" />
        </motion.div>
    );
};

export default Pendulum;
