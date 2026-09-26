import { useState } from "react";
import NavBar from './components/NavBar'
import Accueil from "./components/Accueil";
import 

function App() {
  const [message, setMessage] = useState(
    "Nous accompagnons nos clients dans leurs projets immobiliers."
  );

  const [sectionActive, onChangerSection] = useState('accueil');

  const changerMessage = () => {
    setMessage("Découvrez bientôt nos projets immobiliers.");
  };

  return (
    <Accueil
      titre="Agence Horizon"
      message={message}
      onChanger={changerMessage}
    />
  );
}

export default App;