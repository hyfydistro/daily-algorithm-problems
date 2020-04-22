let L;

// Older Browser support
window.onload = function() {
  L.mapquest.key = 'YOUR-API-KEY-HERE';

  // 'map' refers to a <div> element with the ID map
  let map = L.mapquest.mapquest('map', {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  }) ;
}
