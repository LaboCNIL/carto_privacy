//essai d'utilisation des différentes fonction de d3 pour parser mon fichier csv
//const links2 = d3.csvParse('data.csv');

d3.csv("data.csv").then(links => {

  const root = d3.stratify()
  .id(d => 
    d.nom
  )
  .parentId(d => 
    d.parent
  )(links);
  //.id(d => d.nom)
  //.parentId(d => d.parent);
  console.log(root);
  
  const hierarchie = d3.hierarchy(root);
  console.log(hierarchie);
  })

