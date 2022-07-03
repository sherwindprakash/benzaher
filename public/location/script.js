var tileLayer = new L.TileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy;'
});

var map = new L.Map('map', {
  'center': [sessionStorage.getItem('latitude'), sessionStorage.getItem('longitude')],
  'zoom': 12,
  'layers': [tileLayer]
});

var marker = L.marker([sessionStorage.getItem('latitude'), sessionStorage.getItem('longitude')],{
  draggable: true
}).addTo(map);

marker.on('dragend', function (e) {
  document.getElementById('latitude').value = marker.getLatLng().lat;
  document.getElementById('longitude').value = marker.getLatLng().lng;

  sessionStorage.setItem('latitude', document.getElementById('latitude').value);
  sessionStorage.setItem('longitude', document.getElementById('longitude').value);



});