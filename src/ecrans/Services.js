import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import Entete from '../components/Entete';
import styles from './Services.module.css';

const services = [
    {id: 1, titre: 'Acquisition de terrains', texte: 'Nous repérons et achetons des terrains au potentiel de développement élevé.'},
    {id: 2, titre: 'Financement de projets', texte: 'Nous participons au montage financier et au financement des projets immobiliers.'},
    {id:3, titre:'Développement immobilier', texte: 'Nous coordonnons la conception et la construction, du permis à la livraison.'},
    {id:4, titre: 'Mise en marché et revente', texte:'Nous commercialisons et revendons des propriétés résidentielles et commerciales.'}
]

export default function Services() {
  return (
    <section className={styles.section}>
        <Container>
            <Entete soustitre={'NOS SERVICES'} titre={'Notre agence offre une grande quantité de services immobiliers'}/>

            <Row className='g-4'>
                {services.map((serv) => (
                    <Col key={serv.id} sm={6} lg={3}>
                        <Card className={styles.carte}>
                            <Card.Body>
                                <Card.Title className={styles.titre}>
                                    {serv.titre}
                                </Card.Title>
                                <Card.Text>{serv.texte}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>        
    </section>

  )
}
