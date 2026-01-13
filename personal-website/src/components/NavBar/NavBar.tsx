import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Onat Kaan Atılgan</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/experiences" className={({ isActive }) => isActive ? 'active' : ''}>
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </li>
        <li>
          <a href="https://github.com/LePqrta" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/onat-kaan-atilgan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
}
