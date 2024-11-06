import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Siddhant</h1>
        <p className={styles.description}>
        A passionate developer with a strong foundation in problem-solving and a quick learner, driven to create impactful, user-focused solutions in dynamic tech environments.
        </p>
        <Link to="mailto:sidxaiba2703@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
          Resume
        </Link>
      </div>
      <img
        src={getImageUrl("hero/image.png")}
        alt="profile image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
