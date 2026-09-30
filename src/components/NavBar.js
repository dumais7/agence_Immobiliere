import {Navbar, Nav, Container, NavbarBrand, NavbarCollapse, NavbarToggle} from 'react-bootstrap'

import logo from '../assets/Logo.png';
import styles from './NavBar.module.css';
import sections from '../data/Sections';

import React from 'react'

// Navbar.Toggle -> menu se replit sous un bouton sur petit écran
// NavBar a besoin de la sectionActive 'accueil', 'projets', etc.
// et onChangerSection pour le useState dans App.js
export default function NavBar({sectionActive, onChangerSection}) {
  return (
    <Navbar expand="lg" sticky='top' className={styles.navbar}>
        <Container>
            <NavbarBrand className={styles.brand} onClick={() => onChangerSection('accueil')}>
                <img src={logo} alt='Agence Horizon' className={styles.logo}/>
            </NavbarBrand>

            <NavbarToggle aria-controls="menu-principal"/>

            <NavbarCollapse id='menu-principal'>
                <Nav className='ms-auto'>
                    {sections.map((section) => (
                        <Nav.Link key={section.id} onClick={() => onChangerSection(section.id)}
                        className={section.id === sectionActive ? styles.lienActif : styles.lien}>
                            {section.name}
                        </Nav.Link>
                    ))}
                </Nav>
            </NavbarCollapse>
        </Container>
    </Navbar>
  )
}