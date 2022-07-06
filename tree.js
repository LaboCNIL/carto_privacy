var chartDom = document.getElementById('tree_container');
var myChart = echarts.init(chartDom, null, {
  //height: 1000
});
window.onresize = function () {
  myChart.resize();
};
var option;

function setName(hierach) {
  //on cherche à répliquer la présentation des données que Echarts accepte, c'est a dire juste garder "name" et "children"
  hierach.name = hierach.data.id;
  hierach.data.children = undefined;
  hierach.data.parent = undefined;
  hierach.parent = undefined;
  //itération du processus pour toutes les nodes de l'arbre
  if (hierach.children && hierach.children.length > 0) {
    hierach.children.forEach(x => setName(x));
  }
}

//code permettant de parser le csv
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
  //console.log(hierarchie);
  setName(hierarchie);
  console.log(hierarchie);

  const data = hierarchie;

  option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    dataZoom: {
      type: 'inside',
      disabled: true,
    },
    series: [
      {
        type: 'tree',
        id: 0,
        name: 'tree1',
        data: [data],
        top: '10%',
        left: '8%',
        bottom: '22%',
        right: '20%',
        symbolSize: 7,
        roam: true,
        initialTreeDepth: 1,
        lineStyle: {
          width: 1.5,
          color: '#cacaca'
        },
        itemStyle: {
          color: '#cacaca',
        },
        label: {
          backgroundColor: '#fff',
          boderWidth: 40,
          boderType: 'solid',
          borderRadius: 5,
          padding: [1, 4],
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 14,
          //emphasis: {
          //  color: 'red'
          //},
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left',
            // overflow: 'word' //break by word when the label exceed the width that is set
          },
        },
        emphasis: {
          // blurScope: 'series',
          focus: 'ancestor', //Focus on all ancestor nodes. 
          label: {
            color: '#682ed2',
            fontWeight: 'bold'
          },
          lineStyle: {
            color: '#682ed2'
          },
          itemStyle: {
            //color: '#682ed2',
            borderColor: '#682ed2'
          },
        },
        blur: { //available when emphasis.focus is set. détermine l'apparence des éléments non touchés par le focus

          label: {
            opacity: 0.3
          },
          lineStyle: {
            opacity: 0.3
          },
          itemStyle: {
            opacity: 0.3,
          },
        },
        tooltip: { //le style du tooltip est géré dans le css
          className: 'tooltip',
          trigger: 'item',
          padding: 15,
          hideDelay: 200,
          enterable: true,
          confine: true,
          width: 100,
          formatter: function (params, ticket, callback) {
            //$.get('detail?name=' + params.name, function (content) {
              //callback(ticket, "test");
            //});
            const csvParent = params.data.data.data.parent;
            const csvType = params.data.data.data.type;
            const csvNom = params.data.data.data.nom;
            const csvLien = params.data.data.data.lien;
            const csvDescriptionFr = params.data.data.data.descriptionFr;
            const csvSourceDescriptionFr = params.data.data.data.sourceDescriptionFr;
            const csvLienDescriptionFr = params.data.data.data.lienDescriptionFr;
            const csvPrix = params.data.data.data.prix;
            const csvLicence = params.data.data.data.licence;
            const csvPlateformes = params.data.data.data.plateformes;
            //formattage de la description des titres en liste à puce
            const csvDescriptionFrTitre = csvDescriptionFr.replace(/, /g, '</br>• ').replace(/: /g, ':</br>• ');

            switch (csvType){
              case  "titre":
                return '<div class="tooltip-container">'+csvDescriptionFrTitre+'</div>';
                //return '<div class="tooltip">'+csvDescriptionFrTitre+'</div>';
              case "outil":
                return '<div class ="tooltip-container"><a class="lien-outil" href="'+csvLien+'" target="_blank" rel="noopener noreferrer nofollow">Site web de '+csvNom+'</a><span>'+csvPrix+'</span><span>'+csvLicence+'</span><span>'+csvPlateformes+'</span><div class="description-outil">'+csvDescriptionFr+'<a class="lien-description-outil" href="'+csvLienDescriptionFr+'" target="_blank" rel="noopener noreferrer nofollow">&nbsp;'+csvSourceDescriptionFr+'</a><div></div>';
              case "pratique":
                return '<div class="tooltip-container"><a class="lien-outil" href="'+csvLien+'" target="_blank" rel="noopener noreferrer nofollow">Site web de '+csvNom+'</a><div class="description-outil">'+csvDescriptionFr+'</div></div>';
            }
            
          }
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  };

  option && myChart.setOption(option);
});
