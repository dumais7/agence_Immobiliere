import { Container, Button } from "react-bootstrap";
import styles from './Accueil.module.css';

function Accueil({ titre, message, onChanger }) {
  return (
    <Container className={styles.accueil}>
      <section className={styles.heros}>
        <h1 className={styles.titre}>{titre}</h1>

        <p className={styles.description}>
          {message}
        </p>

        <Button
          variant="dark"
          onClick={onChanger}
        >
          Voir les projets
        </Button>
      </section>
    </Container>
  );
}

export default Accueil;