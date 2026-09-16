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
	
	

Arbres des composants
---------------------
APP --- NavBar ----- Menu
 |
 | --- Contenu ----- 
 |
 | --- Footer ----- InfoAgence
 