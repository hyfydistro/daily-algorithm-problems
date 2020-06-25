# MapQuest API

\#Third party API

## Prerequisite(s)

* Obtain the API Key from the _MapQuest_ website.

In order to do this, you will need to create an account. It has Price and Plans. Choose the free option (it probably does so automatically).

* Attach the script and stylesheet of MapQuest, and place them in the header.

## Keynotes

* Changing the Type of Map

There are a number of different types of map that can be shown with Mapquest API.

Syntax:

        L.mapquest.tielLayer(id,options)

e.g.

        layers: L.mapquesttileLayer('map')

**id**

There are most **map styles** than `map`, see complete list:

- `map`
- `satellite`
- `hybrid`
- `light`
- `dark`

**options**

An object containing any of the following key value options: `format`, `minZoom`, and `maxZoom`.

`format`: The image format of the tiles, either png or jpg. Default is png.
`minZoom`: The minimum zoom that tileLayer is visible. Default is 0.

`maxZoom`: The maximum zoom that tileLayer is visible. Default is 20.

e.g.

        {
          format: 'png',
          minZoom: 0,
          maxZoom: 20
        }

* `L` does NOT need to be declared.

* Adding Different Controls

The map has a number of different controls available. By dfeault it just shows a zoom control. You can expand the controls availabel useing the `map.addControl()` method.

        map.addControl(L.mapquest.control([option]));

The `mapquest.control()` method just creates a simple full-featured control set, and it is placed in the top-right hand corner by default. You can adjust the position by specifying an option object as a parameter for the control containing a `position` property, the value of which is a string a specifying a position for the control.

e.g.

        map.addControl(L.mapquest.control({ position: 'bottomright'}));

There are other types of control available, for example, `mapquest.searchControl()` and `mapquest.satelliteControl()`, and some are quite complex and powerful.

* Adding a Custom Marker

Adding a marker (icon) at a certain point on the map is simple: Use the `L.marker()` method (which seems to be documented in the related Leaflet.js docs).

e.g.

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

At its simplest, it takes two parameters, an _array_ containing the coordinates at which to display the marker, and an _option(s) object_ containing an `icon` property that defines the icon to display at that point.

The icon is defined using `mapquest.icons.marker()` method, which as you can see contains information such as color and size of marker.

Onto the end of the first method we chain `.bindPopup('This is Manchester!')`, which defines content to display when the marker is clicked.

Finally, we chain `.addTo(map)` to the end of the chain to actually add the marker to the map.

* `L.mapquest.directionsControl(options)`

A control that allows for drop in routing functionality, the control has start and destination inputs on the left hand side of the map. A user can either type in their route or click on the map to select their start and destination locations. Once a route is entered, the user is presented with primary and alternate routes along with route narratives on the left hand side below the inputs. The control also has buttons for changing directions between driving and walking, a button to add additional destinations, as well as the ability to change route options, like distance units or if you want to avoid specific types of roads.

* `L.mapquest.searchControl([options])`

A control that allows for drop-in Place Search API functionality.

## Credits

- MapQuest `[variable].tileLayer('[Type of Map]')` documentation - [L.mapquest.tielLayer(id,options)](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/)

- _MapQuest_ - [MapQuest.js API Reference](https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-map/)

- _MDN_ - Third party APIs
