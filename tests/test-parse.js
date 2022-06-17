console.log('running');
d3.csv("../data.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log("ca marche (pas)")
        console.log(data[i].nom);
        console.log(data[i].prix);
    }
});