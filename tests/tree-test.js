var chartDom = document.getElementById('tree-container');
var myChart = echarts.init(chartDom, null, {
    //height: 1000
  });
    window.onresize = function() {
        myChart.resize();
    };
var option;

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
  console.log(hierarchie);

  const data = hierarchie;

  option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
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
          focus: 'ancestor',
          label: {
              color: '#682ed2',
              fontWeight: 'bold'
          },
          lineStyle: {
              color: '#682ed2'
          },
          itemStyle: {
              borderColor: '#682ed2'
          },
        },
        blur: { //available when emphasis.focus is set
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
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  };
});
option && myChart.setOption(option);
