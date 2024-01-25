import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectStack } from '../../../redux/stackUser';
import ErrorAlert from '../../ErrorAlert';
import PigeonMap from '../../PigeonMap/PigeonMap';

const MapUser: React.FC = () => {
  const dataStore = useAppSelector(selectStack);

  return (
    <div id='map' style={{ position: 'relative', height: '100%' }}>
      {dataStore.error?.info && <ErrorAlert message={dataStore.error.info} />}
      {dataStore.latitude && dataStore.longitude && <PigeonMap location={{ lat: dataStore.latitude, lng: dataStore.longitude }} />}
    </div>
  );
};  

export default MapUser;
