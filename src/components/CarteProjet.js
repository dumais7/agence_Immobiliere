import React from 'react'
import {useState} from 'react';
import {Card, Badge, Button} from 'react-bootstrap';
import styles from './CarteProjet.module.css';

// Gere la couleur selon le statut de la propriete
const couleursStatut = {
    'En vente':'success',
    'En développement': 'warning',
    'Vendu': 'secondary'
}

export default function CarteProjet({projet, onRetirer}) {
  return (
    <>
    <Card className={styles.card}>
        <Card.Img
            variant='top'
            src={projet.image}
            alt={projet.titre}
            className={styles.image}
        />

        <Card.Body className={styles.body} >
            <div className={styles.badges} >
                <Badge bg='dark'>{projet.type}</Badge>
                <Badge bg={couleursStatut[projet.statut]}></Badge>
            </div>

            <Card.Title className={styles.titre}>{projet.titre}</Card.Title>
            <p className={styles.ville}>{projet.ville}</p>
        </Card.Body>
    </Card>
    </>
  )
}
