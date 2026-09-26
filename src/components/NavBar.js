import {Navbar, Nav, Container, NavbarBrand, NavbarCollapse, NavbarToggle} from 'react-bootstrap'

import logo from '../assets/Logo.png';
import styles from './NavBar.module.css';

import React from 'react'

// Tous les boutons du Navbar. Seront géré par un map.()
const sections = [
    {id: 'accueil', name:'Accueil'},
    {id: 'projets', name:'Projets'},
    {id: 'services', name:'Services'},
    {id: 'apropos', name:'À Propos'},
    {id: 'joindre', name:'Nous Joindre'},

]

// Navbar.Toggle -> menu se replit sous un bouton sur petit ecran
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