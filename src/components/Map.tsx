import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Location {
  lat: number;
  lng: number;
}

const Map: React.FC<{ location: Location }> = ({ location }) => {
  const { lat, lng } = location;
  const center: [number, number] = [lat, lng];

  return (
    <MapContainer attributionControl={false} style={{ height: '50vh', width: '50%', fontSize: '16px' }} center={center} zoom={11}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>{`Latitude: ${lat}, Longitude: ${lng}`}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
