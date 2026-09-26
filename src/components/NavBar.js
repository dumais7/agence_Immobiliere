import {Navbar, Nav, Container, NavbarBrand} from 'react-bootstrap'

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

export default function NavBar() {
  return (
    <Navbar expand="lg" sticky='top' className={styles.navbar}>
        <Container>
        <Navbar.Brand className={styles.brand} onClick={() => onChangerSection('accueil')}>
            <img src={logo} alt='Agence Horizon' className={styles.logo}/>
        </Navbar.Brand>

        </Container>

    </Navbar>
  )
}
