import { Container, Button } from "react-bootstrap";
import styles from './Accueil.module.css';

// titre de l'accueil, message, setSectionActive pour le useState() dans App.js
function Accueil({ titre, message, onChangerSection }) {
  return (
    <Container className={styles.accueil}>
      <section className={styles.heros}>
        <h1 className={styles.titre}>{titre}</h1>

        <p className={styles.description}>
          {message}
        </p>

        <div className={styles.buttons}>
          <Button variant="dark" onClick={()=> onChangerSection('projets')}>
            Voir les projets
          </Button>

          <Button variant="outline-dark" onClick={() => onChangerSection('services')}>
            Nos services
          </Button>
        </div>
      </section>
    </Container>
  );
}

export default Accueil;