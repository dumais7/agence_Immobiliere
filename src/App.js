import { useState } from "react";

import NavBar from './components/NavBar';
import Accueil from "./ecrans/Accueil";
import Projets from './ecrans/Projets';
import Apropos from './ecrans/Apropos';
import Contacts from './ecrans/Contacts';
import Services from './ecrans/Services';
import sections from './data/Sections';
import styles from './App.module.css';
import Footer from './components/Footer';

import projet01 from './assets/projet-01.jpg';
import projet02 from './assets/projet-02.jpg';
import projet03 from './assets/projet-03.jpg';
import projet04 from './assets/projet-04.jpg';
import projet05 from './assets/projet-05.jpg';
import projet06 from './assets/projet-06.jpg';
import projet07 from './assets/projet-07.jpg';
import projet08 from './assets/projet-08.jpg';
import projet09 from './assets/projet-09.jpg';
import projet10 from './assets/projet-10.jpg';
import projet11 from './assets/projet-11.jpg';
import projet12 from './assets/projet-12.jpg';


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
        image: projet01
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
    image: projet02,
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
    image: projet03,
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
    image: projet04
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
    image: projet05
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
    image: projet06
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
    image: projet07
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
    image: projet08
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
    image: projet09
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
    image: projet10,
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
    image: projet11
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
    image: projet12
  },
];


function App() {

  // section affiche a l'ecran. accueil par defaut.
  // ce state sera utilise pour changer l'affichage
  const [sectionActive, setSectionActive] = useState('accueil');

  const [projets, setProjets] = useState(projetsImmo)


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