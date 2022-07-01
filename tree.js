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
        //edgeShape: 'polyline',
        // edgeForkPosition: '63%',
        roam: true, //enable panning and zooming. Can be set to 'scale' or 'zoom' to enable only one
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
            color: '#682ed2',
            borderColor: '#682ed2'
          },
        },
        blur: { //available when emphasis.focus is set. détermine l'apparence des éléments non touchés par le focus

          label: {
            opacity: 0.4
          },
          lineStyle: {
            opacity: 0.4
          },
          itemStyle: {
            opacity: 0.4,
          },
        },
        tooltip: {
          trigger: 'item',
          padding: 15,
          alwaysShowContent: true, //marche pas
          //alwaysShowContent: 'true', //marche pas
          //position: [10, 10],
          width: 100,
          textStyle: {
            fontStyle: 'italic',
            width: 100, //marche pas
            height: 700, //marche pas non plus
            overflow: 'break', //ne marche que si width est utilisée
          },
          //formatter: 'Series name: {a} <br/> Data name: {b} <br/> Data value (if any):{c0}',
          formatter: function (params, ticket, callback) {
            //$.get('detail?name=' + params.name, function (content) {
              //callback(ticket, "test");
            //});
            const csvParent = params.data.data.data.parent;
            const csvType = params.data.data.data.type;
            const csvNom = params.data.data.data.nom;
            const csvDescriptionFr = params.data.data.data.descriptionFr;
            const csvLien = params.data.data.data.lien;
            const csvPrix = params.data.data.data.prix;
            const csvLicence= params.data.data.data.licence;

            switch (csvType){
              case  "titre":
                return csvDescriptionFr;
              case "outil":
                return '<div class ="tooltip"><a class="tag" href="'+csvLien+'">Site web de '+csvNom+'</a><span>'+csvDescriptionFr+'</span><span>'+csvPrix+'</span><span>'+csvLicence+'</span></div>';
              case "pratique":
                return params.data.data.data.description;
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
