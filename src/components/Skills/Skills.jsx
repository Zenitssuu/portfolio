import React from "react";
import styles from "./Skills.module.css";
import { languages, framework, databases, cp } from "../../data/skills.js";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.skills}>
        {/* language */}
        <div className={styles.languages}>
          <div>
            <h1 className={styles.subHeading}>Languages</h1>
          </div>
          <div className={styles.language}>
            {languages.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* framework */}
        <div className={styles.languages}>
          <div>
            <h1 className={styles.subHeading}>Framework</h1>
          </div>
          <div className={styles.language}>
            {framework.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div> 

        {/* databases */}
        <div className={styles.languages}>
          <div>
            <h1 className={styles.subHeading}>Databases</h1>
          </div>
          <div className={styles.language}>
            {databases.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

            {/* cp */}
        <div className={styles.languages}>
          <div>
            <h1 className={styles.subHeading}>Competitive Prog.</h1>
          </div>
          <div className={styles.language}>
            {cp.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <Link to={skill.link} target="_blank" rel="noopener noreferrer" className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </Link>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
