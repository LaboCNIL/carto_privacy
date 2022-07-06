# Roadmap
Ce document explicite les possibles étapes du développement de la cartographie.

## Integrer une sélection de propositions de l'OpenLINC
Dans le fichier [openlinc.md](openlink.md) se trouvent des propositions de services et pratiques issus de l'utilisation personnelle des agents de la CNIL ainsi que des idées de modification du contenu de la cartographie. Il faut donc revoir les propositions à intégrer.

## Permettre d'avoir des liens pour les pratiques
Parfois une pratique a besoin d'être liée par exemple à un article ou une recommendation de la CNIL. Il serait important de pouvoir implémenter cela, soit comme les outils dans un petit rectangle au dessus de la description, soit en détectant les liens présents dans la description et en les enrobant dans un tag `<a>`. Le problème actuellement avec le bouton au dessus de la description est que si aucun lien n'est présent dans le csv, le bouton est visible, cliquable et renvoie vers la page index.html.

## Zoom sur mobile
Le zoom sur mobile ne marche pas. J'ai testé avec l'extention live server et en entrant l'adresse ip du mac sur le navigateur de mon téléphone. J'ai vu cette démo (lien en dessous) de controleurs pour smartphone mais ça marchait moyen pour moi, et je ne suis pas sûr qu'on peut les integrer dans notre type de diagramme (j'ai éssayé mais je n'ai pas réussi).
- [Exemple  de boutons zoom et reset]()

## Ajouter des descriptions dans le CSV
Il est necessaire d'ajouter une description pour chaque titre, outil et pratique de la base de donnée, en précisant la source etc. Pour cela il convient de récuperrer des informations pertinentes de Wikipédia ou le cas échéant du site du service pour mettre en avant les fonctionnalités privacy pertinentes.

## Revoir le nom des colonnes du CSV
Le nom des colonnes du CSV ont été choisies pour une intégration facile avec javascript mais manquent de lisibilité. 

## Localisation de la librairie Echarts
Actuellement la librairie Echarts se trouve dans le fichier Echarts.js, alors que d3 est appelée via un lien. Qu'est ce qui est le mieux dans ce genre de projet qu'on ordonne tout ça ?

## Surligner le chemin
Actuellement quand on survole une node, ses descendants sont mis en avant par la baisse d'opacité du reste de la carto. Seulement seul le chemin menant de la node à son parent est surligné de couleur violette. Il serait bien que tout le chemin et les nodes ancètres passent en violet comme sur [cette image](#rendu-visuel).
- [Fonctionnement de l'état focus](https://echarts.apache.org/en/option.html#series-tree.emphasis.focus)
- [Fonctionnement du blur](https://echarts.apache.org/en/option.html#series-tree.blur)

## Traduction anglaise
Avoir une seul fichier CSV combinant anglais et français permettrait de n'avoir qu'une seule base de donnée à enrichir. Nous aurions donc un fichier index-en.html et un fichier tree-en.js faisant appel à data.csv, mais en allant rechercher le contenu des bonnes colonnes du csv.

Pour traduire en anglais la base de donnée il est possible de rajouter plusieurs colonnes : description, source de la description, lien vers la source de la description. Ces descriptions sont tirés de Wikipedia EN ou du site du service dans sa version anglaise si possible, dans le cas échéant, une version traduite

## Proposer une nouvelle interface à la cartographie
La cartographie est actuellement difficile à parcourir sur mobile. On pourrait donc imaginer un système de menu dropdown / recherche / autre permettant non seulement de proposer une alternative mobile mais aussi une autre façon de parcourir ces données, par exemple en entrant non plus par des actions mais par des services similaire ou par le prix ou encore par la licence.