/******************POUR LE BON FONCTIONNEMENT DU PROJET******************/

Se rendre dans le dossier du projet et executer les commandes suivantes :

> composer require symfony/webpack-encore-bundle
> npm install 

> php bin/console doctrine:database:create

> php bin/console make:migration

> php bin/console doctrine:migrations:migrate


Ensuite, toujours dans le dossier du projet : 

Lancer un terminal avec le serveur symfony:
>symfony server:start

Ouvrir un navigateur web et rentrer l'adresse suivante :
http://localhost:8000/message


Si tous va bien, la page devrait d'afficher.

/************************************************************************/