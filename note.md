## Présentation
Comme d3.js devenait un peu dur à gerer pour implémenter ce que je voulais, je suis parti sur [echarts.js](https://echarts.apache.org/) pour faire mon arbre. L'arbre est rétractable, s'adapte à la taille du conteneur quand on resize la page, la page html est scrollable, un tooltip est déjà implémenté, il y a un effet d'emphase au hover...

Je suis donc parti de leur exemple [Tree with Polyline Edge](https://echarts.apache.org/examples/en/index.html#chart-type-tree). Mais n'étant pas le plus à l'aise avec Javascript et malgré mes recherches j'ai parfois du mal à faire ce que je veux.

## Parser data.csv pour l'utiliser
Actuellement la carto contient les données de l'exemple et je n'ai pas réussi à mettre le fichier csv dans le même format. J'ai essayé avec d3 et papaparse (même si je pense que papaparse ne permet pas d'obtenir une hierarchie ?).
Il ne s'agit pas simplement de parser le fichier de csv vers json, il faut garder la hierarchie inscrite dans le fichier csv (la colonne "parent").
- ["Stratify" de d3](https://github.com/d3/d3-hierarchy#stratify)
- [Explication de "Stratify" de d3](https://observablehq.com/@d3/d3-stratify)
- [Mon test (sans succès) avec "Stratify"](tests/test-d3stratify.js)
- [Papaparse](https://www.papaparse.com/)

## Changer les infos affichées dans le tooltip
Les infos affichées dans le tooltip dependent de chaque type de graphique proposé par echarts. Pour les graphiques en arbre il affiche le chemin ainsi que la valeur "value" (qui est dans les données de l'exemple). Moi j'aimerais pouvoir afficher la colonne "description" de mon fichier csv.
- [Documentation tree -> tooltip](https://echarts.apache.org/en/option.html#series-tree.tooltip)
- [Formatting of Values in Tooltip](https://echarts.apache.org/handbook/en/basics/release-note/5-3-0/#formatting-of-values-in-tooltip)