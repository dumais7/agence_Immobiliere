Analyse des besoins
-------------------

Le site doit permettre à l'utilisateur de consulter l'ensemble des activités de l'agence immobilière.
Le site doit permettre à l'utilisateur de consulter les propriétés en vente.
Le site doit afficher les informations pertinentes de chaque propriété, soit, un identifiant, un titre, une ville, un type, un statut, 
une description, une information financière ou de superficie et une image.
Le site doit permettre à l'utilisateur de naviguer aisément entre les différentes pages du site. (Accueil, Projets, Services, À Propos et Nous Joindre)
Le site doit permettre à l'utilisateur de consulter les informations essentielles de chaque projet immobilier. (page Projets)
Le site doit permettre à l'utilisateur d'appliquer un filtre de recherche pour n'afficher que les projets intéressants pour l'utilisateur.
Le site doit permettre à l'utilisateur de retirer un projet de la liste si celui-ci ne l'intéresse pas.
Le site doit clairement indiquer si aucun projet ne correspond au filtre appliqué.
Le site doit permettre à l'utilisateur de savoir exactement dans quelle section il se trouve grâce à un affichage convivial.
Le site doit permettre à l'utilisateur de savoir quel filtre est actif grâce à un affichage convivial.
Le site doit être aussi beau sur un ordinateur qu'un cellulaire ou une tablette. (responsive)

Cas d'utilisation
- - - - - - - - -

Consulter l'ensemble des activités de l'agence
Acteur : Utilisateur
Processus :
	- L'utilisateur arrive sur le site
	- Utilisateur a le choix entre plusieurs sections pour découvrir le site
	- Utilisateur clique sur un bouton du menu
	
Navigation
Acteur : Utilisateur
Processus :
	- Utilisateur clique sur un bouton dans le menu
	- Selon le bouton cliqué, il ira sur la page correspondante
	- Bouton accueil -> page accueil
	- Bouton projets -> accès à tous les projets de l'agence
	- Bouton services -> informations sur les services de l'agence
	- Bouton À propos -> Informations sur l'agence
	- Bouton nous joindre -> Informations de contact

Detail d'une propriété
Acteur : Utilisateur
Processus : 
	- Utilisateur clique sur une propriété
	- Le clic montre les informations complètes d'une propriété (titre, ville, type, statut, 
	  description, info financière/superficie, image)
	  
Appliquer un filtre de recherche
Acteur : Utilisateur
Processus : 
	- Utilisateur sélectionne un filtre dans le menu de filtre
	- La liste des projets se modifie en fonction du filtre sélectionné
	- Si aucune propriété ne correspond au filtre -> affiche un avertissement	
	
Retirer un projet de la liste
Acteur : Utilisateur
Processus : 
	- Utilisateur décide de supprimer une propriété
	- Clique sur le bouton supprimer
	- La propriété disparaît de la liste
	
Savoir dans quelle section du site nous sommes
Acteur : Utilisateur
Processus :
	- Utilisateur clique sur un bouton du menu
	- La couleur du bouton change pour que l'utilisateur sache où il se trouve dans le site
	
Savoir quel fitre est actif
Acteur : Utilisateur
Processus :
	- Utilisateur clique sur un filtre dans la page Projets
	- La couleur du bouton correspondant au filtre change
	
Site accessible sur tout type de plateforme
Acteur : Utilisateur
Processus :
	- Utilisateur consulte le site sur un cellulaire
	- Le site s'adapte au format de l'écran
	
Informations à afficher
- Pour chaque projet : une image, un titre, une ville ou un secteur, un type, un statut, une courte description et une information financière ou de superficie.
- Une présentation de l'agence et de ses activités (acquisition de terrains, financement, développement, mise en marché et revente)
- La liste des services offerts.
- Les coordonnées de l'agence.

Contraintes de qualité
- L'interface doit être claire, professionnelle et visuellement cohérente d'une section à l'autre.
- L'interface doit rester lisible et utilisable sur ordinateur, tablette et téléphone.
- Les actions possibles (boutons, filtres, liens) doivent être faciles à repérer.

Contraintes techniques
- L'application est réalisée en React à partir du projet de départ fourni.
- L'interface utilise React-Bootstrap et des CSS Modules.
- La navigation se fait par affichage conditionnel, sans React Router.
- Les projets sont conservés dans un state. Aucun backend ni API.
	

Arbres des composants
---------------------
APP --- NavBar ----- Menu
 |
 | --- Contenu ----- MenuFiltre
 |
 | --- Footer ----- InfoAgence


 Correction des erreurs
------------------------

1. Dans App.js, il y a une faute de frappe dans import Accueil from "./components/Acceuil" 
2. Le fichier CSS pour Accueil n'est pas nommé de la bonne façon. J'ai modifié le nom pour Accueil.module.css. 
3. Dans Accueil.js, faute de frappe dans l'importation de import "./Acceuil.css". Ça devient import styles from './Accueil.module.css'.
4. Dans App.js, le prop est titreSite, alors que dans Accueil.js il est nommé titre. J'ai renommé pour titre seulement.
5. Dans Accueil.js, le onClick était mal écrit. Le C était en minuscule alors qu'il devrait être en majuscule. 
6. Dans Accueil.js, on déclare className={hero} alors que ça devrait être {styles.heros}. 
7. Dans Accueil.module.css, on a padding:30 sans préciser l'unité de mesure. J'ai mis 30px.
8. Le fichier CSS pour App inclut seulement des styles par défaut. J'ai supprimé le fichier App.css pour repartir à neuf.
9. Dans App.js, le bouton onChanger ne fait rien parce que la méthode ne lui ai pas passée correctement. J'ai corrigé par onChanger={changerMessage} 
10. Bootstrap n'était pas importé dans index.js. Alors je l'ai importé avec import 'bootstrap/dist/css/bootstrap.min.css'.
11. J'ai supprimé les fichiers inutiles tels que : App.Test.js, setupTests.js, logo.svg et reportWebVitals.js.