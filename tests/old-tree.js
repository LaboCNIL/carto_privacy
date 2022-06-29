var chartDom = document.getElementById('tree_container');
var myChart = echarts.init(chartDom, null, {
    //height: 1000
  });
    window.onresize = function() {
        myChart.resize();
    };
var option;
const data = {
  name: 'Carto Outils et Pratiques Privacy par LINC',
  children: [
    {
      name: "S'EQUIPER",
      children: [
        {
          name: 'Choisir son smartphone',
          children: [
            { name: 'Fairphone', value: "hello" },
            { name: 'Pixel Phone', value: 4294 }
          ]
        },
        {
          name: 'Choisir son ordinateur',
          value: 91830870
        },
        {
          name: 'Recharger son smartphone',
          children: [
            { name: 'Cable USB sans data', value: 721 }
          ]
        },
        {
          name: 'Choisir son OS',
          children: [
            { name: 'GrapheneOS', value: 721 },
            { name: 'CalyxOS', value: 4294 }
          ]
        },
        {
          name: 'Installer des applications',
          children: [
            { name: 'AuroraOS', value: 721 },
            { name: 'F-Droid', value: 4294 }
          ]
        },
      ]
    },
    {
      name: 'NAVIGUER',
      children: [
        {
          name: 'Choisir son navigateur',
          children: [
            { name: 'Firefox', value: 721 },
            { name: 'Tor', value: 4294 }
          ]
        },
        {
          name: 'Chercher',
          children: [
            { name: 'Duck Duck Go', value: 721 },
            { name: 'Qwant', value: 4294 }
          ]
        },
        {
          name: 'Réguler les traqueurs',
          children: [
            { name: 'DoNotTrack', value: 721 },
            { name: 'uBlock Origin', value: 4294 },
            { name: 'Privacy Badger'}
          ]
        },
        {
          name: 'Optimiser son navigateur',
          children: [
            { name: 'HTTPS Everywhere', value: 721 },
            { name: 'Disconnect', value: 4294 }
          ]
        },
      ]
    },
    {
      name: 'COMMUNIQUER',
      children: [
        {
          name: 'Echanger par messagerie instantannée',
          children: [
            { name: 'Signal', value: 721 },
            { name: 'Skred', value: 4294 },
            { name: 'Briar', value: 721 },
            { name: 'Threema', value: 4294 },
            { name: 'Element', value: 721 },
            { name: 'Rocket Chat', value: 4294 }
          ]
        },
        {
          name: 'Echanger par mail',
          children: [
            { name: 'Protonmail', value: 721 },
            { name: 'Thunderbird', value: 4294 },
            { name: 'Hushmail', value: 721 },
            { name: 'K-9 mail', value: 4294 },
            { name: 'FairEmail', value: 721 },
            { name: 'Roundcube', value: 4294 }
          ]
        },
        {
          name: 'Echanger par sms',
          children: [
            { name: 'QKSMS', value: 721 }
          ]
        },
        {
          name: 'Partager',
          children: [
            { name: 'Filezilla', value: 721 },
            { name: 'Lufi', value: 4294 },
            { name: 'Private Bin', value: 721 }
          ]
        },
        {
          name: 'Utiliser les réseaux sociaux',
          children: [
            { name: 'Diaspora', value: 721 },
            { name: 'Mastodonte', value: 4294 },
            { name: 'Frendli.ca', value: 721 }
          ]
        },
        {
          name: 'Chiffrer ses communications',
          children: [
            { name: 'Open PGP', value: 721 },
            { name: 'GNUPG', value: 4294 }
          ]
        },
      ]
    },
    {
      name: 'STOCKER',
      children: [
        {
          name: 'Stocker chez soi',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
        {
          name: 'Stocker dans le cloud',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
        {
          name: 'Archiver et trier',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 }
          ]
        },
        {
          name: 'Chiffrer',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 }
          ]
        },
      ]
    },
    {
      name: 'VEROUILLER',
      children: [
        {
          name: 'Gerer ses mots de passe',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
            { name: 'Outil 5', value: 721 },
            { name: 'Outil 6', value: 4294 },
            { name: 'Outil 7', value: 721 },
          ]
        },
        {
          name: "Utiliser l'authentification à 2 facteurs",
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
        {
          name: "Hors ligne",
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 }
          ]
        },
      ]
    },
    {
      name: 'CONTROLER',
      children: [
        {
          name: 'Auditer le respect de la vie privée',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
        {
          name: 'Agir sur ses données',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
      ]
    },
    {
      name: 'COMPRENDRE',
      children: [
        {
          name: 'Le marché des données',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
        {
          name: 'Les outils de tracking',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
      ]
    },
    {
      name: 'TRAVAILLER',
      children: [
        {
          name: 'Travailler seul sur des doncuments',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
        {
          name: 'Travailler à plusieur sur des documents',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
        {
          name: 'Creer',
          children: [
            { name: 'Outil 0', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
      ]
    },
    {
      name: 'VIVRE AU QUOTIDIEN',
      children: [
        {
          name: 'Planifier',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 }
          ]
        },
        {
          name: 'Se déplacer',
          children: [
            { name: 'Pratique 1 un peu longue', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 }
          ]
        },
        {
          name: 'Se divertir',
          children: [
            { name: 'Outil 0', value: 721 },
            { name: 'Outil 1', value: 4294 },
            { name: 'Outil 2', value: 721 },
            { name: 'Outil 3', value: 4294 },
            { name: 'Outil 4', value: 721 },
          ]
        },
      ]
    },
  ]
};
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
        position: [10, 10],
        textStyle: {
          width: 100, //marche pas
          height: 700, //marche pas non plus
          overflow: 'break', //ne marche que si width est utilisée
        },
        formatter: 'Series name: {a} <br/> Data name: {b} <br/> Data value (if any):{c}'
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
};

option && myChart.setOption(option);