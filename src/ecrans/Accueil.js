import { Container, Button } from "react-bootstrap";
import styles from './Accueil.module.css';

function Accueil({ titre, message, setSectionActive }) {
  return (
    <Container className={styles.accueil}>
      <section className={styles.heros}>
        <h1 className={styles.titre}>{titre}</h1>

        <p className={styles.description}>
          {message}
        </p>

        <div className={styles.buttons}>
          <Button variant="dark" onClick={()=> setSectionActive('projets')}>
            Voir les projets
          </Button>

          <Button variant="outline-dark" onClick={() => setSectionActive('services')}>
            Nos services
          </Button>
        </div>
      </section>
    </Container>
  );
}

export default Accueil;