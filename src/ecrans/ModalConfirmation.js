import React from 'react'
import {Button} from 'react-bootstrap';
import styles from './ModalConfirmation.module.css';

export default function ModalConfirmation({titre, children, onFermer, onConfirmer, texteConfirmer = 'Confirmer'}) {
  return (
    <div className={styles.arrierePlan}>
        <div className={styles.fenetre} sm={6} lg={4}>
            <h4>{titre}</h4>
            <div>{children}</div>

            <div className={styles.action}>
                <Button variant='outline-secondary' onClick={onFermer}>
                    Annuler
                </Button>

                <Button variant='danger' onClick={onConfirmer}>
                    {texteConfirmer}
                </Button>
            </div>
        </div>
    </div>
  )
}
