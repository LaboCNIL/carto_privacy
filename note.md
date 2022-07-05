## Présentation
Comme d3.js devenait un peu dur à gerer pour implémenter ce que je voulais, je suis parti sur [echarts.js](https://echarts.apache.org/) pour faire mon arbre. L'arbre est rétractable, s'adapte à la taille du conteneur quand on resize la page, la page html est scrollable, un tooltip est déjà implémenté, il y a un effet d'emphase au hover...

Je suis donc parti de leur exemple [Tree with Polyline Edge](https://echarts.apache.org/examples/en/index.html#chart-type-tree). Mais n'étant pas le plus à l'aise avec Javascript et malgré mes recherches j'ai parfois du mal à faire ce que je veux.

## Rendu visuel
Voici une image montrant à quoi pourra ressembler la cartographie. Le design n'est pas définitif dans les formes et les couleurs mais permet de montrer comment le contenu du csv est intégré à la cartographie (notamment dans le tooltip). L'important étant que les différents éléments soient bien lisibles.
![image de l'interface de la cartographie, avec des flèches explicatives](images/mockup.png "Mockup visuel de la cartographie")

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

~~### Changer les infos affichées dans le tooltip~~
~~Les infos affichées dans le tooltip dependent de chaque type de graphique proposé par echarts. Pour les graphiques en arbre il affiche le chemin ainsi que qu'une valeur "value" (qui est dans les données de l'exemple). Moi j'aimerais pouvoir afficher différentes informations, comme montré dans [l'image plus haut](#rendu-visuel). Toutes les infos necessaires sont bien dans le JSON obtenu depuis le csv.~~
- ~~[Documentation tree -> tooltip](https://echarts.apache.org/en/option.html#series-tree.tooltip)~~
- ~~[Formatting of Values in Tooltip](https://echarts.apache.org/handbook/en/basics/release-note/5-3-0/#formatting-of-values-in-tooltip)~~
- ~~[Tooltip data formatter](https://echarts.apache.org/en/option.html#series-tree.data.tooltip.formatter) a l'air de donner une explication de comment importer d'autres infos dans le tooltip~~

## ~~Les tooltips doivent avoir une largeur fixe~~Résolu en stylisant avec le css le contenu du tooltip
Quand le texte dans le tooltip est long, le tooltip est très large aussi. J'ai essayé d'inclure une largeur fixe et une gestion de l'overflow mais étrangement ça ne marche pas (ligne 129 dans le fichier tree.js). Pourtant quand je test d'autres propriétés de textStyle ça marche : par ex le texte en italique ou changer la taille de la police.
- [Documentation de texStyle width](https://echarts.apache.org/en/option.html#series-tree.tooltip.textStyle.width)

## ~~Les tooltips débordent hors de l'écran~~ Résolu avec "enterable: true"
Une idée serait de mettre le tooltip en haut à gauche de la carto par exemple. Je l'ai déja fait et ça marche. A voir si il existe un autre moyen, peut être en visant le contenu du tooltip grâce au css.

## ~~Le tooltip ne reste pas assez longtemps pour que l'on puisse cliquer dessus~~Resolut avec 
J'ai essayé avec différentes approches dont actuellement alwaysShowContent sans succès. Sinon il y a hideDelay mais qui n'a pas marché aussi. Je pense que ce n'est peut être pas prévu pour ce type de diagramme peut être.
- [Documentation alwaysShowContent](https://echarts.apache.org/en/option.html#tooltip.alwaysShowContent)


