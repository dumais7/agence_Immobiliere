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
Le site doit être lisible peu importe sur quelle plateforme il est consulté. 
Le site doit être aussi beau sur un ordinateur qu'un cellulaire ou une tablette. (responsive)
Le site doit être simple d'utilisation tout en restant professionnel et clair.

Cas d'utilisation
- - - - - - - - -

Afficher avertissement
Acteur : Utilisateur du site
Processus :
	- Utilisateur sélectionne un filtre
	- Si des propriétés correspondent au filtre -> afficher
	- Si aucune propriété correspond au filtre -> Afficher avertissement
	

Arbres des composants
---------------------
APP --- NavBar ----- Menu
 |
 | --- Contenu ----- 
 |
 | --- Footer ----- InfoAgence
 