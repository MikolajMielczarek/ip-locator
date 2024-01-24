import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface Location {
  lat: number;
  lng: number;
}

const RecenterAutomatically: React.FC<{ location: Location }> = ({ location }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([location.lat, location.lng]);
    }, [location]);
    return null;
};

export default RecenterAutomatically;
