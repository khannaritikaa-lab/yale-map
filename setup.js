var map = L.map('map').setView([41.31118, -72.92847], 16);

// Search Addresses
L.Control.geocoder({
  defaultMarkGeocode: false
})
.on('markgeocode', function(e) {
  map.fitBounds(e.geocode.bbox);
})
.addTo(map);

// Scale bar
L.control.scale().addTo(map);

// Basemaps
var Satellite = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var CartoLight = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var CartoDark = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var StamenTerrain = L.tileLayer(
  'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
  { attribution: 'Map tiles by Stamen Design — Data © OpenStreetMap' }
);

var EsriTopo = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var EsriSat = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

// Default basemap
EsriSat.addTo(map);

// Layer control
var baseMaps = {
  "Satellite (Esri)": EsriSat,
  "CARTO Light": CartoLight,
  "CARTO Dark": CartoDark,
  "Stamen Terrain": StamenTerrain,
  "Esri Topo": EsriTopo
};

L.control.layers(baseMaps).addTo(map);

// Polygon (Sterling Memorial Library)
var polygon = L.polygon([
  [41.31112, -72.92877],
  [41.31096, -72.92842],
  [41.31105, -72.92834],
  [41.31119, -72.92870]
]).addTo(map);

polygon.bindPopup("Sterling Memorial Library");

// Coffee shop
var circle = L.circle([41.310490, -72.922764], {
  radius: 20,
  color: "brown"
}).addTo(map)
.bindPopup("Willoughby's Coffee ☕");
