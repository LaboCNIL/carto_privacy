//essai d'utilisation des différentes fonction de d3 pour parser mon fichier csv
const links2 = d3.csvParse('data.csv');

const links = d3.csv("data.csv", (d) => {
    return {
      name: d.nom,
      parent: d.parent,
      lien: d.lien,
      type: d.type,
      description: d.description
    };
  });
  console.log(links);

const root = d3.stratify(links)
.id(d => d[links.columns[1]])
.parentId(d => d[links.columns[0]]);
console.log(root.children);

const hierarchie = d3.hierarchy(root);
console.log(hierarchie);