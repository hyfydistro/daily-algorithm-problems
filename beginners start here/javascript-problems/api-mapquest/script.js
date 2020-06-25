// Older Browser support
window.onload = function() {
  L.mapquest.key = '[API-Key]';

  // 'map' refers to a <div> element with the ID map
  let map = L.mapquest.map('map', {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  }) ;

  // Add controls; Position controls 'position'
  map.addControl(L.mapquest.control({ position: 'bottomright'}));

  // Add (Custom) Marker
  // Parameters
  // (1) an Array that shows its coordinates
  // (2) an option(s) object that defines its icon to display and its visual properties
  L.marker([53.480759, -2.242631], {
    icon: L.mapquest.icons.marker({
      primaryColor: '#22407F',
      secondaryColor: '#3B5998',
      shadow: true,
      size: 'md',
      symbol: 'A'
      })
    })
    .bindPopup('This is Manchester!')
    .addTo(map);

    // A control that allows for drop in routing functionality,
    // the control has start and destination inputs on the left hand side of the map
//     let directionsControl = L.mapquest.directionsControl({
//   className: '',
//   directions: {
//     options: {
//       timeOverage: 25,
//       doReverseGeocode: false,
//     }
//   },
//   directionsLayer: {
//     startMarker: {
//       title: 'Drag to change location',
//       draggable: true,
//       icon: 'marker-start',
//       iconOptions: {
//         size: 'sm'
//       }
//     },
//     endMarker: {
//       draggable: true,
//       title: 'Drag to change location',
//       icon: 'marker-end',
//       iconOptions: {
//         size: 'sm'
//       }
//     },
//     viaMarker: {
//       title: 'Drag to change route'
//     },
//     routeRibbon: {
//       showTraffic: true
//     },
//     alternateRouteRibbon: {
//       showTraffic: true
//     },
//     paddingTopLeft: [450, 20],
//     paddingBottomRight: [180, 20],
//   },
//   startInput: {
//     compactResults: true,
//     disabled: false,
//     location: {},
//     placeholderText: 'Starting point or click on the map...',
//     geolocation: {
//       enabled: true
//     },
//     clearTitle: 'Remove starting point'
//   },
//   endInput: {
//     compactResults: true,
//     disabled: false,
//     location: {},
//     placeholderText: 'Destination',
//     geolocation: {
//       enabled: true
//     },
//     clearTitle: 'Remove this destination'
//   },
//   addDestinationButton: {
//     enabled: true,
//     maxLocations: 10,
//   },
//   routeTypeButtons: {
//     enabled: true,
//   },
//   reverseButton: {
//     enabled: true,
//   },
//   optionsButton: {
//     enabled: true,
//   },
//   routeSummary: {
//     enabled: true,
//     compactResults: false,
//   },
//   narrativeControl: {
//     enabled: true,
//     compactResults: false,
//     interactive: true,
//   }
// }).addTo(map);

// Locked destination
// let directionsControl = L.mapquest.directionsControl({
//   endInput: {
//     disabled: true,
//     geolocation: {
//       enabled: false
//     }
//   },
//   addDestinationButton: {
//     enabled: false
//   }
// }).addTo(map);
//
// directionsControl.setFirstDestination({
//   latLng: {
//     lat: 39.750307,
//     lng: -104.999472
//   }
// });

// Search Control
let searchControl = L.mapquest.searchControl({
  className: '',
  hoverMarker: {
    icon: 'marker',
    iconOptions: {
      size: 'sm',
      primaryColor: '#333333',
      secondaryColor: '#333333'
    }
  },
  search: {
    sort: 'relevance',
    pageSize: 20
  },
  searchInput: {
    searchAheadOptions: {
      limit: 6,
      collection: 'address,adminArea,airport,poi,category,franchise'
    },
    compactResults: true,
    placeholderText: 'Search',
    clearTitle: 'Clear search'
  },
  searchLayer: {
    buffer: 256,
    collisionMargin: 2,
    marker: {
      icon: 'via',
      iconOptions: {
        primaryColor: '#ffffff',
        secondaryColor: '#333333',
        size: 'lg'
      },
      popupEnabled: true
    },
    paddingTopLeft: [420, 20],
    paddingBottomRight: [20, 20],
    searchResponse: {},
    updateResultsOnMapMove: true
  }
}).addTo(map);
};

// Modern Browser support
// window.addEventListener('load',  function() {
//   L.mapquest.key = 'dKE0VmGAJCCrG8nR6Oas3VNSsZOaGDFf';
//
//   // 'map' refers to a <div> element with the ID map
//   let map = L.mapquest.mapquest('map', {
//     center: [53.480759, -2.242631],
//     layers: L.mapquest.tileLayer('map'),
//     zoom: 12
//   });
// });
