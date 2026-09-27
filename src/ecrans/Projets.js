import React from 'react'
import {useState} from 'react';
import {Container, Row, Col, Alert} from 'react-bootstrap';

import CarteProjet from '../components/CarteProjet';
import styles from '../components/CarteProjet.module.css'
import FiltreProjets from '../components/FiltreProjets';

const filtres = ['Tous','Résidentiel', 'Commercial', 'Terrain'];

export default function Projets({projets, onRetirerProjet}) {
    const [filtreActif, setFiltreActif] = useState('Tous');

    const projetsAffiches = 
        filtreActif === 'Tous' ? projets : projets.filter((projet) => projet.type === filtreActif);
  return (
    <section className={styles.section}>
        <Container>
            <div className={styles.entete}>
                <span className={styles.sousTitre}>NOS PROJETS</span>
                <p>
                    Découvrez les projets résidentiels, commerciaux et les terrains
                    que l'agence développe ou met en marché.
                </p>
            </div>

            <FiltreProjets
                filtres={filtres}
                filtreActif={filtreActif}
                onChangerFiltre={setFiltreActif}
            />

            {projetsAffiches === 0 ? (
                <Alert variant='info' className={styles.aucunProjet}>
                    Aucun projet ne correspond au filtre : {filtreActif}
                </Alert>
            ):(
                <Row className='g-4'>
                    {projetsAffiches.map((projet) => (
                        <Col key={projet.id} sm={6} lg={4}>
                            <CarteProjet projet={projet} onRetirer={onRetirerProjet}/>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    </section>
  );
}
