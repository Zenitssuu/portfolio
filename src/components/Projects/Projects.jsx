import React from "react";

import styles from "./Projects.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "../../data/projects_data.js";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.heading}>
        <h2 className={styles.title}>Projects</h2>

        <Link to="https://github.com/Zenitssuu/" target="_blank" rel="noopener noreferrer"  className={styles.github}>
          Github
          <span className={styles.link}>
            <FaExternalLinkAlt />
          </span>
        </Link>
      </div>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
