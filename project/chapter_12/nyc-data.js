let nycMap;
nycMap = L.map("map");

// create tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(nycMap);

nycMap.setView([40.7128, -74.0060], 16);

// Add geoJSON data from nycneighborhoods.js variable nyc, to nycMap
L.geoJSON(nyc).addTo(nycMap);

// add some fill color to the map
L.geoJSON(nyc, {
    style: function(feature) {
        return {
            color: "blue",
            fillColor: "purple",
            fillOpacity: 0.3
        };
    }
}).addTo(nycMap);

// show each borough on the map
L.geoJSON(nyc, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.borough + "</h3> <hr> <h3>" + feature.properties.neighborhood + "</h3>");
    }
}).addTo(nycMap);

// $("#pan-to-flatbush").click(function() {
//     const flatbush = nyc.features.find(function(feature) {
//         return feature.properties.neighborhood === "Flatbush";
//     })
//     console.log(flatbush);
//     const coordinate_flatbush = nyc.features.find(function(feature){
//         return features.properties.neighborhood === "Flatbush";
//     }).geometry.coordinate_flatbush;
//     console.log(coordinate_flatbush);
//     nycMap.panTo(new L.LatLng(coordinate_flatbush[0][0][1], coordinate_flatbush[0][0][0]));
// });

$("#pan-to-sunnyside").click(function() {
    // find flatbush neighborhood property in the dataset
    let sunnyside = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Sunnyside";
    });
    console.log(sunnyside);
    // find the coordinates of sunnyside property
    let coordinates = nyc.features.find(function(feature) {
        return feature.properties.neighborhood === "Sunnyside";
    }).geometry.coordinates;
    console.log(coordinates);
    nycMap.panTo(new L.LatLng(coordinates[0][0][1], coordinates[0][0][0]));
});