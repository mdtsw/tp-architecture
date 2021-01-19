EL ALAMI Younes 03/12/20

FONTVIELLE Laureen

GRANDEMANGE Mathis

LELIEVRE François

Document de design FLMY

Demande du client :

Nous souhaitons créer un site web permettant de pouvoir réserver des billets d'avions, voir la liste des vols disponible avec l'heure de départ, le code de destination et le prix en euros et bien-sûr de pouvoir réserver notre billet.

Notre solution doit permettre:

- De s'identifier
- De permettre à un utilisateur de voir la liste des vols disponibles
- La réservation des billets d'avion
- De voir le panier

Nos objectifs :

Notre site web doit être universelle en effet il doit être scalable pour pouvoir s'exécuter sur toutes les machines de nos clients sans aucun problème.

On se chargera de mesurer le temps de réponses de notre web service pour voir s'il n'y a pas de problèmes. De plus, on récupérera les logs pour vérifier qu'il n'y a aucune anomalie.

Notre objectif est d'avoir un site facile d'utilisation et qu'il soit totalement fonctionnel.

Schéma architecture globale :

[images/Image1.png]

[images/Image2.png]

Le modèle de donnée stocké :

Nous avons donc effectué une représentation schématique (MCD) pour la visualisation de notre base de données :

[images/Image3.png]

La stack technique :

[images/Image4.png]

Nous allons stocker pour la plus grande partie de notre projet sur GitHub afin de pouvoir partager les codes que nous créons.

[images/Image5.png]

Nous allons utiliser différents langages comme html , css, php. En effet, le java script est un langage de développement des interfaces web, elle fait partie conséquente de la réalisation de notre site web. Le CSS nous permet de faire le design de notre site web. Le PHP est une partie invisible pour l&#39;utilisateur car elle sera exécutée sur nos serveurs en effet c&#39;est la partie qui gère les bases données.

[images/Image6.png]

Nous allons utiliser la plateforme de développement WAMP, qui est un environnement comprenant trois serveurs (Apache, MySQL et MariaDB), un interpréteur de script (PHP), ainsi que phpMyAdmin pour l&#39;administration Web des bases MySQL.
Cette plateforme est disponible pour les principaux systèmes d&#39;exploitation Windows (WAMP), Mac OS (MAMP) et Linux (LAMP).
