import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.aboutItemHeading}>Software Developer Enthusiasts</h3>
              <p>
              A dedicated and adaptable developer with a strong grounding in building scalable, user-centered applications and optimizing complex systems. Skilled in full-stack development and proficient in data structures and algorithms, I consistently bring a solution-focused approach to projects. I thrive in fast-paced, dynamic tech environments, leveraging my ability to quickly learn new technologies and apply innovative ideas to solve real-world challenges.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
