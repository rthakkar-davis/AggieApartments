import React from "react";
import GoogleMapReact from 'google-map-react';
import '../css/Map.css'

export default function Map({defaultLocation, busStopCoords}){
  const handleApiLoaded = (map, maps) => {
    function createBusStopMarker(latlng, line) {   
      var marker = new maps.Marker({
          position: latlng,
          map: map,
          icon: `http://maps.google.com/mapfiles/kml/paddle/${line}.png`
      });
    }
    function createAptMarker(latlng) {   
      var marker = new maps.Marker({
          position: latlng,
          map: map,
          icon: "http://maps.google.com/mapfiles/kml/shapes/homegardenbusiness.png"
      });
    }
    busStopCoords.forEach(v => {
      let coords = (({ lat, lng }) => ({ lat,lng }))(v);
      createBusStopMarker(coords, v.line)
    })
    createAptMarker({lat: defaultLocation[0], lng: defaultLocation[1]})
  };

  return (
    <div className="map-wrapper">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCdp_7x8_jLe-d_znbc5NjySNcJiIgyvZE" }}
        defaultCenter={defaultLocation}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
      </GoogleMapReact> 
    </div>
  );
}