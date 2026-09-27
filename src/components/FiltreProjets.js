import React from 'react';
import { Button } from 'react-bootstrap';

import styles from './FiltreProjets.module.css';


export default function FiltreProjets({ filtres, filtreActif, onChangerFiltre }) {
  return (
    <div className={styles.filtres}>
      {filtres.map((filtre) => (
        <Button
          key={filtre}
          variant={filtre === filtreActif ? 'success' : 'outline-success'}
          className={styles.bouton}
          onClick={() => onChangerFiltre(filtre)}
        >
          {filtre}
        </Button>
      ))}
    </div>
  );
}
