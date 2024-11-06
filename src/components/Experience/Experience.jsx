import React from "react";

import styles from "./Experience.module.css";
// import {languages} from "../../data/skills.js";
import { history } from "../../data/history.js";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("history/vec.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3 className={styles.aboutItemHeading}>
                Software Developer Enthusiasts
              </h3> */}
              <p>
              Although I have yet to gain formal industry experience, I am fully dedicated to honing my technical skills and building projects that reflect industry standards. With a solid proficiency in the MERN stack and a strong foundation in Spring Boot, I am well-versed in handling complex web development projects across both frontend and backend. I continually seek to expand my knowledge and adapt quickly to emerging technologies, taking on challenging projects that simulate real-world applications. My commitment to learning and my focus on crafting scalable, user-centered solutions position me to seamlessly transition into a professional environment where I can make a meaningful impact.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
              I have experience developing fast and optimised back-end systems
              and APIs
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>
              I have designed multiple landing pages and have created design
              systems as well
            </p>
          </div>
        </li> */}
        </ul>
      </div>
    </section>
  );
};
