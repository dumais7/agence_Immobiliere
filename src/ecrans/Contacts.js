import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Entete from '../components/Entete';
import styles from './Contacts.module.css';
import logoAgence from '../assets/Agence.png';

const coordos =[
    {id:1, titre: 'Adresse', texte: '123 rue Smith, Montreal, QC'},
    {id:2, titre: 'Téléphone', texte : '514-555-6789'},
    {id:3, titre: "Heures d'ouverture", texte: 'Du lundi au vendredi 9h à 17h'}
]
export default function Contacts() {
  return (
    <section className={styles.section}>
      <Container>
        <Entete surtitre="NOUS JOINDRE" titre="Parlons de votre projet">
          Notre équipe répond à vos questions sur nos projets, nos services
          et les occasions d’investissement.
        </Entete>

        <Row className="g-4">
          {coordos.map((coordo) => (
            <Col key={coordo.id} sm={6} lg={3}>
              <div className={styles.bloc}>
                <div className={styles.icone}>{coordo.icone}</div>
                <h5 className={styles.titre}>{coordo.titre}</h5>
                <p className={styles.texte}>{coordo.texte}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
