import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <Link to="mailto:sidxaiba2703@gmail.com">sidxaiba2703@gmail.com</Link>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <Link to="https://www.linkedin.com/in/siddhant-saiba-9a46231aa/" target="_blank" rel="noopener noreferrer">linkedin.com/Siddhant Saiba</Link>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <Link to="https://www.github.com/Zenitssuu" target="_blank" rel="noopener noreferrer">github.com/Zenitssuu</Link>
        </li>
      </ul>
    </footer>
  );
};
