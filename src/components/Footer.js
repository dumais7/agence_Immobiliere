import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import sections from '../data/Sections';
import styles from './Footer.module.css';

export default function Footer({ onChangerSection }) {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row className='g-4'>
                    <Col md={6}>
                        <h5 className={styles.nom} >Agence Horizon</h5>
                    </Col>

                    <Col md={6}>
                        <h6 className={styles.titreLiens}>Liens rapides</h6>
                        <div className={styles.liens}>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    type="button"
                                    className={styles.lien}
                                    onClick={() => onChangerSection(section.id)}
                                >
                                    {section.name}
                                </button>
                            ))}
                        </div>
                    </Col>
                </Row>

                <div className={styles.bas}>
                    2026 Agence Horizon - All rights reserved
                </div>
            </Container>
        </footer>
    )
}
