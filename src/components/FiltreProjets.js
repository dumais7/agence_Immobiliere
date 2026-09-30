import React from 'react';
import { Button } from 'react-bootstrap';

import styles from './FiltreProjets.module.css';

// FiltreProjets a besoin des filtres, du filtre actif et de la fonction qui change le filtre actif
export default function FiltreProjets({ filtres, filtreActif, onChangerFiltre }) {
  return (
    <div className={styles.filtres}>
      {filtres.map((filtre) => (
        <Button
          key={filtre}
          variant={filtre === filtreActif ? 'secondary' : 'outline-secondary'}
          className={styles.bouton}
          onClick={() => onChangerFiltre(filtre)} // onChangerFiltre('Tous') ('Residentiel') OU ('Commercial')
        >
          {filtre}
        </Button>
      ))}
    </div>
  );
}
