import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./gallery.scss";
import Tag from "../Tag/index";

function Gallery() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setProjects(data.projects))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = (project) => {
        setSelectedProject(project);
    };

    const handleClose = () => {
        setSelectedProject(null);
    };

    return (
        <div className="galleryContent">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    {project.images.length > 0 && (
                        <img
                            src={project.images[0].src}
                            alt={project.images[0].title}
                            onClick={() => handleClick(project)}
                            style={{ cursor: "pointer" }}
                        />
                    )}
                </motion.div>
            ))}

            {selectedProject && (
                <div className="overlay" onClick={handleClose}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={handleClose}>
                            &times;
                        </span>
                        <div className="imgInformation">
                            <img
                                src={selectedProject.images[0].src}
                                alt={selectedProject.images[0].title}
                            />
                            <div className="contentAllInformation">
                                <span className="spanOne">
                                    <h2>Année:</h2>{" "}
                                    <p>{selectedProject.year}</p>
                                    <a href={selectedProject.github}>
                                        <i class="fa-brands fa-github"></i>
                                    </a>
                                </span>
                                <span className="spanTwo">
                                    <h2>Mission:</h2>
                                    <p>{selectedProject.description}</p>
                                </span>{" "}
                                <h2>Technologie utilisés</h2>
                                <div className="contentTag">
                                    {selectedProject.tags.map((tag) => (
                                        <Tag tag={tag} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="contentTwo">
                            <img
                                src={selectedProject.images[1].src}
                                alt={selectedProject.images[1].title}
                            />
                            <img
                                src={selectedProject.images[2].src}
                                alt={selectedProject.images[2].title}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
