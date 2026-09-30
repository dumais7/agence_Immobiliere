import {useState} from 'react';
import {Card, Badge, Button} from 'react-bootstrap';
import styles from './CarteProjet.module.css';
import ModalConfirmation from '../ecrans/ModalConfirmation'

// Gère la couleur selon le statut de la propriété
const couleursStatut = {
    'En vente':'success',
    'En développement': 'warning',
    'Vendu': 'secondary'
}

// CarteProjet a besoin du projet et onRetirer pour gérer le retrait
export default function CarteProjet({projet, onRetirer}) {

// gestion de l'affichage du modal de suppression
const [afficherModal, setAfficherModal] = useState(false);

// quand on confirme un retrait, on passe id a onRetirer
// et on ferme le modal
const confirmerRetrait = () => {
    onRetirer(projet.id);
    setAfficherModal(false);
}

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
                <Badge bg={couleursStatut[projet.statut]}>{projet.statut}</Badge>
            </div>

            <Card.Title className={styles.titre}>{projet.titre}</Card.Title>
            <p className={styles.ville}>{projet.ville}</p>
            <Card.Text>{projet.description}</Card.Text>

            <div className={styles.infos}>
                <span>
                    <strong>Prix : </strong>{projet.prix}
                </span>
            </div>

            <Button
            variant='outline-danger'
            size='sm'
            className={styles.boutonRetirer}
            onClick={()=> setAfficherModal(true)}
            >
            Retirer
            </Button>
        </Card.Body>
    </Card>

    {afficherModal &&(
        <ModalConfirmation
        titre='Retirer ce projet ?'
        texteConfirmer='Retirer'
        onFermer={() => setAfficherModal(false)}
        onConfirmer={confirmerRetrait}
        >
            <p>Voulez-vous vraiment retirer <strong>{projet.titre}</strong> de la liste ?</p>    
        </ModalConfirmation>
    )}
    </>
  )
}
