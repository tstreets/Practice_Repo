window.onload = ()=> {
    createGeoJSON();
}

function createGeoJSON() {
    const data = [{lat: 37.776, lng: -122.414}];
    const dataGeoJSON = GeoJSON.parse(data, { Point: ["lat", "lng"] });

    console.log(dataGeoJSON);

}