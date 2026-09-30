import React from 'react'
import {useState} from 'react';
import {Container, Row, Col, Alert} from 'react-bootstrap';

import CarteProjet from '../components/CarteProjet';
import styles from './Projets.module.css';
import FiltreProjets from '../components/FiltreProjets';
import Entete from '../components/Entete';

// Liste de filtres
const filtres = ['Tous','Résidentiel', 'Commercial', 'Terrain'];

// Page Projets prend en props : projets et onRetirerProjet pour quand on retire un projet
export default function Projets({projets, onRetirerProjet}) {

    // useState pour les filtres d'affichage
    const [filtreActif, setFiltreActif] = useState('Tous');

    // Gestion de l'affichage. Opérateur ternaire et filter()
    const projetsAffiches = 
        filtreActif === 'Tous' 
        ? projets 
        : projets.filter((projet) => projet.type === filtreActif);

  return (
    <section className={styles.section}>
        <Container>
            <Entete soustitre={'NOS PROJETS'} titre={"Laissez-vous gâter"}>
                Découvrez les projets résidentiels, commerciaux et les terrains que l'agence développe ou met en marché
            </Entete>
            
            <FiltreProjets
                filtres={filtres}
                filtreActif={filtreActif}
                onChangerFiltre={setFiltreActif}
            />

            {projetsAffiches.length === 0 ? (
                <Alert variant='info' className={styles.aucunProjet}>
                    Aucun projet ne correspond au filtre : {filtreActif}
                </Alert>
            ): (
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
