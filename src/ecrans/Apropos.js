import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Entete from '../components/Entete';
import styles from './Apropos.module.css';
import logoAgence from '../assets/Agence.png';

// prends pas de props, pas besoin
export default function Apropos() {
  return (
    <section className={styles.section}>
        <Container>
            <Entete soustitre='À PROPOS' titre="Bâtir l'avenir" />

            <Row className='align-items-center g-5'>
                <Col lg={5} className='text-center'>
                    <img src={logoAgence} alt='Logo Agence Horizon' className={styles.logo}/>
                </Col>

                <Col lg={7}>
                    <p>
                        L’Agence Horizon est une agence financière immobilière québécoise.
                        Elle acquiert des terrains, participe au financement et au
                        développement de projets, puis met en marché des propriétés
                        résidentielles et commerciales.
                    </p>
                    <p>
                        Notre approche repose sur la transparence, la rigueur financière
                        et le respect des communautés où nous construisons.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
