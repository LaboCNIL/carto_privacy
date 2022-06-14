//essai d'utilisation des différentes fonction de d3 pour parser mon fichier csv
const links2 = d3.csvParse('datatest.csv');

const links = d3.csv("datatest4.csv", (d) => {
    return {
      name: d.nom,
      parent: d.parent,
      lien: d.lien,
      type: d.type,
      note: d.note
    };
  });
  console.log(links);

const root = d3.stratify(links)
.id(d => d[links.columns[1]])
.parentId(d => d[links.columns[0]]);
console.log(root.children);

const hierarchie = d3.hierarchy(root);
console.log(hierarchie);