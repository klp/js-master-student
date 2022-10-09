let poemMap;
poemMap = L.map("map");
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);

poemMap.setView([40.7128, -74.0060], 16); // set the map view by default

// add a marker
const timesSquare = L.marker([40.7580, -73.9855]).addTo(poemMap);
timesSquare.bindPopup("<b>Times Square</b>"); //bind to popup

// add a circle
const circle = L.circle([40.7580, -73.9855], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(poemMap);

// polyline
const polyline = L.polyline([
    [40.7580, -73.9855],
    [40.7486, -73.9840]
], {
    color: 'green'
}).addTo(poemMap);

polyline.bindPopup("<b>Times Square to Graduate Center</b>");
circle.bindPopup("I'm a circle!");

// pan the map to times square
poemMap.panTo(timesSquare.getLatLng());

// Challenge
// create markers for night market and 111 train station
const queensNightMarket = L.marker([40.74826747961223, -73.85054568858276]).addTo(poemMap);
const oneEleventhStreetStation = L.marker([40.75183557683284, -73.85534147827792]).addTo(poemMap);
const latLongs = [
    [40.75183557683284, -73.85534147827792],
    [40.751583621809644, -73.85582427589705],
    [40.74748718679847, -73.85351757615341],
    [40.747308368413016, -73.85259489625905],
    [40.74836501553473, -73.85294894784641],
    [40.748568214979436, -73.85246615022729],
    [40.74826747961223, -73.85054568858276]
];

// draw polyline from station to night market
const nightMarketPolyline = L.polyline(latLongs, {color: 'green'}).addTo(poemMap);
// Show both points in default view of maps
poemMap.fitBounds(nightMarketPolyline.getBounds());
