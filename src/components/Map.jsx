import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `76vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 59.9142004, lng: 10.7247821 }}
  >
    {props.locations.map((loc) => (
      <Marker
        key={loc.code}
        name={loc.name}
        position={loc.position}
        onMouseOver={() => props.onMouseOver(loc)}
        onMouseOut={() => props.onMouseOut(loc)}
      >
        {loc.showTooltip && (
          <InfoWindow>
            <h4>{loc.name}</h4>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

export default MyMapComponent;
