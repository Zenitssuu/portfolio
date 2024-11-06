import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} href="/">
        Portfolio
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ?  "underline" : "none",
                  textUnderlineOffset: isActive ? "10px" : "0",
                };
              }}
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  // fontWeight: isActive ? "bold" : "",
                  // color: isActive ? "red" : "black",
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "10px" : "0",
                };
              }}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "10px" : "0",
                };
              }}
              to="/experience"
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "10px" : "0",
                };
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  textUnderlineOffset: isActive ? "10px" : "0",
                };
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
