# Global Radar

Global Radar is an interactive website that tracks Flight and Airport information across the globe.
It will provide various forms of data for users who are curious of a flight or airport status.
Due to volume of data available for flights and airports, the current implementation will first focus on providing airport information and status for the user.

__Functionality and MVP__

In Global Radar, users will be able to

- [X] View major airports on a map
- [X] Zoom in and see airports in that area
- [X] Select an airport
- [X] View various information about the airport (name, location, country, timezone, latitude, longitude)
- [X] Click on an airport and see the flights departing and arriving
- [X] Select a plane on the map
- [X] View Departing and Arriving airports for a selected plane

__Wireframe__

![picture](demo.png)

This app consists of a single screen with a map and UI tools for the user. Users can click and drag, zoom in or out to see more information.

__Architecture & Technologies__

- Vanilla Javascript to request information. Parse response to GeoJSON
- Mapbox API for map interaction
- Aviation Edge API

__Implementation Timeline__

__Day 1__
- Map (Learning about Mapbox API)
  - Set up style (map theme/background/color scheme) and layer
  - Implement placing markers on the map
  - Popups that will pop up from markers when clicked

__Day 2__
- Display interactive tools that users can use
- Convert the received information to GeoJSON
- Display the markers based on the received information on the map

__Day 3__
- Filter and show airports for a given criteria
- Backend implementation to retrieve and parse the airport data / search and filter information

__BONUS Features__

- [ ] Airline information
