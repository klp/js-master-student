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

