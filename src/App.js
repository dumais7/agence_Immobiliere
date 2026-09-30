import { useState } from "react";

import NavBar from './components/NavBar';
import Accueil from "./ecrans/Accueil";
import Projets from './ecrans/Projets';
import Apropos from './ecrans/Apropos';
import Contacts from './ecrans/Contacts';
import Services from './ecrans/Services';
import styles from './App.module.css';
import Footer from './components/Footer';
import projetsImmo from "./data/projetsImmo";

function App() {

  // section affichée à l'écran. Accueil par défaut.
  // ce state sera utilisé pour changer l'affichage
  const [sectionActive, setSectionActive] = useState('accueil');

  const [projets, setProjets] = useState(projetsImmo)

  // la fonction se trouve au même endroit que le useState
  const retirerProjet = (id) => {
    setProjets(projets.filter((projet) => projet.id !== id));
  }


  return (
    <div className={styles.app}>
      <NavBar 
        sectionActive={sectionActive}
        onChangerSection={setSectionActive}
      />

      <main className={styles.contenu}>
        {sectionActive === 'accueil' && (
          <Accueil 
            titre="Agence Horizon"
            message='Nous accompagnons nos clients dans leurs projets immobiliers.'
            onChangerSection={setSectionActive}
          />
        )}

        {sectionActive === 'projets' &&(
          <Projets
            projets={projets}
            onRetirerProjet={retirerProjet}
          />
        )}

        {sectionActive === 'apropos' &&(
          <Apropos/>
        )}

        {sectionActive === 'joindre'&&(
          <Contacts/>
        )}

        {sectionActive === 'services'&&(
          <Services/>
        )}
      </main>
      <Footer onChangerSection={setSectionActive}/>
    </div>
  );
}

export default App;