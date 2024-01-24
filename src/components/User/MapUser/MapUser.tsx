import React from 'react';
import Map from '../../Map';
import { useAppSelector } from '../../../redux/hooks';
import { selectStack } from '../../../redux/stackUser';
import ErrorAlert from '../../ErrorAlert';

const MapUser: React.FC = () => {
  const dataStore = useAppSelector(selectStack);

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      {dataStore.error?.info && <ErrorAlert message={dataStore.error.info} />}
      {!dataStore && <Map location={{ lat: 37.773972, lng: -122.431297 }} />}
      {dataStore.latitude && dataStore.longitude && <Map location={{ lat: dataStore.latitude, lng: dataStore.longitude }} />}
    </div>
  );
};

export default MapUser;
