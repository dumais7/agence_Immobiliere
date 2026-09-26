import { useState } from "react";

import NavBar from './components/NavBar';
import Accueil from "./ecrans/Accueil";
import styles from './App.module.css';

const projetsImmo =[
    {
        id:1,
        titre: 'Condos Rive-Sud',
        ville: 'Longueuil',
        type: 'Résidentiel',
        statut: 'En vente',
        description : 'Immeuble de 48 condos près du métro, avec terrasse commune sur le toit.',
        prix: '389 000$',
        superficie : '85 m²',
        image: '/assets/projet-01.jpg',
    },
  {
    id: 2,
    titre: 'Plateau Lumière',
    ville: 'Montréal',
    type: 'Résidentiel',
    statut: 'En développement',
    description: 'Rénovation de plex anciens en logements modernes et écoénergétiques.',
    prix: '625 000 $',
    superficie: '110 m²',
    image: '/assets/projet-02.jpg',
  },
  {
    id: 3,
    titre: 'Domaine des Érables',
    ville: 'Lévis',
    type: 'Résidentiel',
    statut: 'Vendu',
    description: 'Quartier de 30 maisons unifamiliales entourées d’espaces verts.',
    prix: '475 000 $',
    superficie: '160 m²',
    image: '/assets/projet-03.jpg',
  },
  {
    id: 4,
    titre: 'Les Jardins du Fleuve',
    ville: 'Rimouski',
    type: 'Résidentiel',
    statut: 'En vente',
    description: 'Maisons de ville avec vue sur le fleuve, à deux pas du centre-ville.',
    prix: '349 000 $',
    superficie: '130 m²',
    image: '/assets/projet-04.jpg',
  },
  {
    id: 5,
    titre: 'Carré Horizon',
    ville: 'Québec',
    type: 'Commercial',
    statut: 'En développement',
    description: 'Complexe de bureaux de quatre étages avec commerces au rez-de-chaussée.',
    prix: '8 200 000 $',
    superficie: '5 400 m²',
    image: '/assets/projet-05.jpg',
  },
  {
    id: 6,
    titre: 'Place du Marché',
    ville: 'Sherbrooke',
    type: 'Commercial',
    statut: 'En vente',
    description: 'Centre commercial de quartier comprenant une épicerie et douze locaux.',
    prix: '4 750 000 $',
    superficie: '3 200 m²',
    image: '/assets/projet-06.jpg',
  },
  {
    id: 7,
    titre: 'Pôle Techno Laval',
    ville: 'Laval',
    type: 'Commercial',
    statut: 'Vendu',
    description: 'Édifice de bureaux certifié LEED pour entreprises technologiques.',
    prix: '12 500 000 $',
    superficie: '7 800 m²',
    image: '/assets/projet-07.jpg',
  },
  {
    id: 8,
    titre: 'Entrepôts de l’Outaouais',
    ville: 'Gatineau',
    type: 'Commercial',
    statut: 'En développement',
    description: 'Bâtiment industriel léger avec quais de chargement et bureaux.',
    prix: '6 300 000 $',
    superficie: '9 500 m²',
    image: '/assets/projet-08.jpg',
  },
  {
    id: 9,
    titre: 'Terrain du Lac-Saint-Jean',
    ville: 'Saguenay',
    type: 'Terrain',
    statut: 'En vente',
    description: 'Grand terrain boisé zoné résidentiel, idéal pour un projet de chalets.',
    prix: '520 000 $',
    superficie: '42 000 m²',
    image: '/assets/projet-09.jpg',
  },
  {
    id: 10,
    titre: 'Lots du Parc industriel',
    ville: 'Drummondville',
    type: 'Terrain',
    statut: 'En développement',
    description: 'Lots desservis en bordure de l’autoroute 20, zonage industriel.',
    prix: '1 150 000 $',
    superficie: '25 000 m²',
    image: '/assets/projet-10.jpg',
  },
  {
    id: 11,
    titre: 'Terrain Côte-du-Sud',
    ville: 'La Pocatière',
    type: 'Terrain',
    statut: 'Vendu',
    description: 'Terrain agricole converti en zone résidentielle de faible densité.',
    prix: '295 000 $',
    superficie: '18 000 m²',
    image: '/assets/projet-11.jpg',
  },
  {
    id: 12,
    titre: 'Berges de la Saint-Maurice',
    ville: 'Trois-Rivières',
    type: 'Terrain',
    statut: 'En vente',
    description: 'Terrain riverain prêt à construire pour un projet mixte.',
    prix: '870 000 $',
    superficie: '12 500 m²',
    image: '/assets/projet-12.jpg',
  },
];


function App() {

  // section affiche a l'ecran. accueil par defaut.
  // ce state sera utilise pour changer l'affichage
  const [sectionActive, setSectionActive] = useState('accueil');

  const [projets, setProjets] = useState(projetsImmo)

  const changerMessage = () => {
    setMessage("Découvrez bientôt nos projets immobiliers.");
  };

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
            setSectionActive={setSectionActive}
          />
        )}
      </main>
      
    </div>
  );
}

export default App;