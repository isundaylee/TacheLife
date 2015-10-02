function initHomepageMap() {
  map = new google.maps.Map($('#google_map_content')[0], {
    center: {lat: 42.358038, lng: -71.080748},
    zoom: 14,
    styles: [
      {
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      }, {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
          { "visibility": "on" }
        ]
      }
    ],
    disableDefaultUI: true
  });
}