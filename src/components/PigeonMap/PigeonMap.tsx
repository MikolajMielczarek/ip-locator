import React, { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';

interface Location {
  lat: number;
  lng: number;
}

interface MapProps {
  location: Location;
}

const PigeonMap: React.FC<MapProps> = ({ location }) => {
  const originalMarkerSize = 30;
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [markerSize, setMarkerSize] = useState(originalMarkerSize);
  const customMarkerStyle = {
    width: `${markerSize}px`,
    height: `${markerSize}px`,
    backgroundColor: 'blue',
    borderRadius: '50%',
    border: '2px solid white',
  };

  const handleMarkerClick = () => {
    const coordinates = `${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}`;
    navigator.clipboard.writeText(coordinates)
      .then(() => {
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
      setMarkerSize(originalMarkerSize * 0.75);
      setTimeout(() => setMarkerSize(originalMarkerSize), 300);
  };

  return (
    <Map center={[location.lat, location.lng]} zoom={12} attribution={false}>
      <Marker
        anchor={[location.lat, location.lng]}
        payload={1}
        style={customMarkerStyle}
        onClick={() => handleMarkerClick()}
        onMouseOver={() => setTooltipVisible(true)}
        onMouseOut={() => setTooltipVisible(false)}
      />
      {tooltipVisible && (
        <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bold' }}>
          <p>Lat: {location.lat.toFixed(6)}</p>
          <p>Lng: {location.lng.toFixed(6)}</p>
        </div>
      )}
    </Map>
  );
};

export default PigeonMap;
