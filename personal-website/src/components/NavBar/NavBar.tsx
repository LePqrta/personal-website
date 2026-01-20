import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Onat Kaan Atılgan</div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link} 
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/experiences" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <a 
            href="https://github.com/LePqrta" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/onat-kaan-atilgan/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}