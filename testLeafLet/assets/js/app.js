const M = {
    map: {},
}

const customIcons = {
    green: {},
    yellow: {},
    red: {}
}
for(let color of Object.keys(customIcons)) {
    customIcons[color] = new L.Icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}

M.map = L.map("mymap").setView([39.7739474, -86.1680898], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(M.map);

fetch(`assets/data/locations.json`)
.then(data=> data.json())
.then(dataJSON=> {
    for(let location of dataJSON.locations) {
        L.marker(location.coords, {icon: customIcons.yellow})
        .addTo(M.map).bindPopup(location.name);
    }
});

const provider = new GeoSearch.OpenStreetMapProvider();

const searchControl = new GeoSearch.GeoSearchControl({
  provider: provider,
});

M.map.addControl(searchControl);