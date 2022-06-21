//bout de code permettant de parser le csv grâce à D3.js

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
  });

