import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectStack } from '../../../redux/stackSearch';
import ErrorAlert from '../../ErrorAlert';
import PigeonMap from '../../PigeonMap/PigeonMap';


const MapSearch: React.FC = () => {
  const dataStore = useAppSelector(selectStack);

  return (
    <>
      {dataStore.error?.info && <ErrorAlert message={dataStore.error.info} />}
      {!dataStore.latitude && <PigeonMap location={{ lat: 37.773972, lng: -122.431297 }}/>}
      {dataStore.latitude && dataStore.longitude && <PigeonMap location={{ lat: dataStore.latitude, lng: dataStore.longitude }}/>}
    </>
  );
};
  
export default MapSearch;
