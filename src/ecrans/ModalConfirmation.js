import React from 'react'
import {Button} from 'react-bootstrap';
import styles from './ModalConfirmation.module.css';

// modal a besoin du titre, onFermer, onConfirmer, texteConfirmer
// Ces props rendent le Modal réutilisable. On passe en props à la place
// de coder en dur.
export default function ModalConfirmation({titre, children, onFermer, onConfirmer, texteConfirmer}) {
  return (
    <div className={styles.arrierePlan}>
        <div className={styles.fenetre} sm={6} lg={4}>
            <h4>{titre}</h4>
            <div>{children}</div>

            <div className={styles.actions}>
                <Button variant='outline-secondary' onClick={onFermer}>
                    Annuler
                </Button>

                <Button variant='danger' onClick={onConfirmer}>
                    Retirer
                </Button>
            </div>
        </div>
    </div>
  )
}
