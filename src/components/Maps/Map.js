import React, { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

function LocationMarker({ changeCoordenades, coordenades }) {
  const [position, setPosition] = useState(null);
  var myIcon = L.icon({
    iconUrl: "/images/google-icon.png",
    iconSize: [30, 30],
    iconAnchor: [30, 30],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
  });

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      if (changeCoordenades) {
        changeCoordenades(
          e.latlng.toString().replace("LatLng(", "").replace(")", "")
        );
      }
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={myIcon}>
      <Popup>Estás aquí</Popup>
    </Marker>
  );
}

const Map = ({ changeCoordenades }) => {
  return (
    <MapContainer
      center={[10.1980878, -67.9674077]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: 450, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker
        changeCoordenades={changeCoordenades ? changeCoordenades : null}
      ></LocationMarker>
    </MapContainer>
  );
};

export default Map;
